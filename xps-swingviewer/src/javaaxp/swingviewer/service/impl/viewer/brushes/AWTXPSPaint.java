/*
 * java-axp XPS utility
 * Copyright (C) 2007-2008 Chris Pope
 * 
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */

package javaaxp.swingviewer.service.impl.viewer.brushes;

import java.awt.Paint;
import java.awt.PaintContext;
import java.awt.Rectangle;
import java.awt.RenderingHints;
import java.awt.geom.AffineTransform;
import java.awt.geom.Rectangle2D;
import java.awt.image.BufferedImage;
import java.awt.image.ColorModel;

import javaaxp.core.service.IXPSAccess;
import javaaxp.core.service.XPSError;

public abstract class AWTXPSPaint implements Paint {

	
	private Paint fOpacityMaskPaint;

	public PaintContext createContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds, AffineTransform xform, RenderingHints hints) {
		PaintContext opacityPaintContext = null;
		if(fOpacityMaskPaint != null){
			opacityPaintContext = fOpacityMaskPaint.createContext(new BufferedImage(1,1,BufferedImage.TYPE_4BYTE_ABGR).getColorModel(), deviceBounds, userBounds, xform, hints);
		}
		
		try {
			return getPaintContext(cm, deviceBounds, userBounds, xform, hints, opacityPaintContext);
		} catch (XPSError e) {
			throw new RuntimeException(e);
		}
	}

	protected abstract AWTXPSPaintContext getPaintContext(ColorModel cm, Rectangle deviceBounds, Rectangle2D userBounds, AffineTransform xform, RenderingHints hints, PaintContext opacityPaintContext) throws XPSError;

	public int getTransparency() {
		return 0;
	}
	
	public void setOpacityMaskPaint(Paint blendingFillPaint) {
		fOpacityMaskPaint = blendingFillPaint;
	}

}
