//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.0.3-b01-fcs 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2006.10.23 at 11:22:55 PM EDT 
//


package javaaxp.core.service.impl.document.jaxb;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for SignatureDefinitionsType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="SignatureDefinitionsType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="SignatureDefinition" type="{http://schemas.microsoft.com/xps/2005/06/signature-definitions}SignatureDefinitionType" maxOccurs="unbounded"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "SignatureDefinitionsType", namespace = "http://schemas.microsoft.com/xps/2005/06/signature-definitions", propOrder = {
    "signatureDefinition"
})
public class SignatureDefinitionsType {

    @XmlElement(name = "SignatureDefinition", namespace = "http://schemas.microsoft.com/xps/2005/06/signature-definitions", required = true)
    protected List<SignatureDefinitionType> signatureDefinition;

    /**
     * Gets the value of the signatureDefinition property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the signatureDefinition property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getSignatureDefinition().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link SignatureDefinitionType }
     * 
     * 
     */
    public List<SignatureDefinitionType> getSignatureDefinition() {
        if (signatureDefinition == null) {
            signatureDefinition = new ArrayList<SignatureDefinitionType>();
        }
        return this.signatureDefinition;
    }

}