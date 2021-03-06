(function(){
var $gwt_version = "1.7.1";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
$stats && $stats({moduleName:'g',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var _;
function equals_0(other){
  return this === (other == null?null:other);
}

function hashCode_2(){
  return this.$H || (this.$H = ++sNextHashId);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals_0;
_.hashCode$ = hashCode_2;
_.typeMarker$ = nullMethod;
_.typeId$ = 1;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.equals$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

var sNextHashId = 0;
function $clinit_4(){
  $clinit_4 = nullMethod;
  $clinit_2();
  new DOMImplIE6();
}

function $createScriptElement(doc, source){
  var elem;
  elem = doc.createElement('script');
  elem.text = source;
  return elem;
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0();
_.typeId$ = 0;
function $clinit_3(){
  $clinit_3 = nullMethod;
  $clinit_4();
}

function $isOrHasChild(parent_0, child){
  return parent_0 === child || parent_0.contains(child);
}

function DOMImplTrident(){
}

_ = DOMImplTrident.prototype = new DOMImpl();
_.typeId$ = 0;
var currentEventTarget = null;
function $clinit_2(){
  $clinit_2 = nullMethod;
  $clinit_3();
}

function DOMImplIE6(){
}

_ = DOMImplIE6.prototype = new DOMImplTrident();
_.typeId$ = 0;
function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0();
_.typeId$ = 0;
_.dead = false;
_.source = null;
function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast(registered.map[($clinit_4() , nativeEvent).type], 2);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      typeKey.flyweight.nativeEvent = nativeEvent;
      typeKey.flyweight.relativeElem = relativeElem;
      $fireEvent_1(handlerSource, typeKey.flyweight);
      typeKey.flyweight.nativeEvent = currentNative;
      typeKey.flyweight.relativeElem = currentRelativeElem;
    }
  }
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent();
_.typeId$ = 0;
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function $GwtEvent$Type(this$static){
  this$static.index = ++nextHashCode;
  return this$static;
}

function hashCode_1(){
  return this.index;
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type.prototype = new Object_0();
_.hashCode$ = hashCode_1;
_.typeId$ = 0;
_.index = 0;
var nextHashCode = 0;
function $DomEvent$Type(this$static, eventName, flyweight){
  this$static.index = ++nextHashCode;
  this$static.flyweight = flyweight;
  if (!registered) {
    registered = $PrivateMap(new PrivateMap());
  }
  registered.map[eventName] = this$static;
  this$static.name_0 = eventName;
  return this$static;
}

function DomEvent$Type(){
}

_ = DomEvent$Type.prototype = new GwtEvent$Type();
_.typeId$ = 7;
_.flyweight = null;
_.name_0 = null;
function KeyEvent(){
}

_ = KeyEvent.prototype = new DomEvent();
_.typeId$ = 0;
function $clinit_30(){
  $clinit_30 = nullMethod;
  TYPE = $DomEvent$Type(new DomEvent$Type(), 'keypress', ($clinit_30() , new KeyPressEvent()));
}

function dispatch(handler){
  $updateState(handler.this$0);
}

function getAssociatedType(){
  return TYPE;
}

function KeyPressEvent(){
}

_ = KeyPressEvent.prototype = new KeyEvent();
_.dispatch = dispatch;
_.getAssociatedType = getAssociatedType;
_.typeId$ = 0;
var TYPE;
function $PrivateMap(this$static){
  this$static.map = {};
  return this$static;
}

function PrivateMap(){
}

_ = PrivateMap.prototype = new Object_0();
_.typeId$ = 0;
_.map = null;
function dispatch_0(handler){
  detachWidgets();
}

function fire(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent();
    $fireEvent_0(source, event_0);
  }
}

function getAssociatedType_0(){
  return TYPE_0;
}

function CloseEvent(){
}

_ = CloseEvent.prototype = new GwtEvent();
_.dispatch = dispatch_0;
_.getAssociatedType = getAssociatedType_0;
_.typeId$ = 0;
var TYPE_0 = null;
function DefaultHandlerRegistration(){
}

_ = DefaultHandlerRegistration.prototype = new Object_0();
_.typeId$ = 0;
function $HandlerManager(this$static, source){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry());
  this$static.source = source;
  this$static.isReverseOrder = false;
  return this$static;
}

function $addHandler_0(this$static, type, handler){
  if (this$static.firingDepth > 0) {
    $defer(this$static, $HandlerManager$1(new HandlerManager$1(), this$static, type, handler));
  }
   else {
    $addHandler(this$static.registry, type, handler);
  }
  return new DefaultHandlerRegistration();
}

function $defer(this$static, command){
  if (!this$static.deferredDeltas) {
    this$static.deferredDeltas = $ArrayList(new ArrayList());
  }
  $add_4(this$static.deferredDeltas, command);
}

function $fireEvent_0(this$static, event_0){
  var oldSource;
  if (event_0.dead) {
    event_0.dead = false;
    event_0.source = null;
  }
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    ++this$static.firingDepth;
    $fireEvent(this$static.registry, event_0, this$static.isReverseOrder);
  }
   finally {
    --this$static.firingDepth;
    if (this$static.firingDepth == 0) {
      $handleQueuedAddsAndRemoves(this$static);
    }
  }
  if (oldSource == null) {
    event_0.dead = true;
    event_0.source = null;
  }
   else {
    event_0.source = oldSource;
  }
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), this$static.deferredDeltas); c$iterator.i < c$iterator.this$0.size;) {
        c = dynamicCast($next_0(c$iterator), 3);
        $addHandler(c.this$0.registry, c.val$type, c.val$handler);
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function HandlerManager(){
}

_ = HandlerManager.prototype = new Object_0();
_.typeId$ = 0;
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
_.registry = null;
_.source = null;
function $HandlerManager$1(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function HandlerManager$1(){
}

_ = HandlerManager$1.prototype = new Object_0();
_.typeId$ = 8;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$HandlerRegistry(this$static){
  this$static.map = $HashMap(new HashMap());
  return this$static;
}

function $addHandler(this$static, type, handler){
  var l;
  l = dynamicCast($get(this$static.map, type), 4);
  if (!l) {
    l = $ArrayList(new ArrayList());
    $put(this$static.map, type, l);
  }
  setCheck(l.array, l.size++, handler);
}

function $fireEvent(this$static, event_0, isReverseOrder){
  var count, handler, i, type, l, l_0, l_1;
  type = event_0.getAssociatedType();
  count = (l = dynamicCast($get(this$static.map, type), 4) , !l?0:l.size);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = (l_0 = dynamicCast($get(this$static.map, type), 4) , dynamicCast((checkIndex(i, l_0.size) , l_0.array[i]), 10));
      event_0.dispatch(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = (l_1 = dynamicCast($get(this$static.map, type), 4) , dynamicCast((checkIndex(i, l_1.size) , l_1.array[i]), 10));
      event_0.dispatch(handler);
    }
  }
}

function HandlerManager$HandlerRegistry(){
}

_ = HandlerManager$HandlerRegistry.prototype = new Object_0();
_.typeId$ = 0;
function Gadget(){
}

_ = Gadget.prototype = new Object_0();
_.typeId$ = 0;
function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function initDim(arrayClass, typeId, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_52();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.typeId$ = typeId;
  result.queryId$ = queryId;
  return result;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
      throw new ArrayStoreException();
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
      throw new ArrayStoreException();
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0();
_.typeId$ = 0;
_.length = 0;
_.queryId$ = 0;
function $clinit_52(){
  $clinit_52 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_0(), expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_52();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(srcId, dstId){
  return srcId && !!typeIdArray[srcId][dstId];
}

function canCastUnsafe(srcId, dstId){
  return srcId && typeIdArray[srcId][dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
    throw new ClassCastException();
  }
  return src;
}

var typeIdArray = [{}, {}, {1:1}, {11:1}, {11:1}, {11:1}, {11:1}, {2:1}, {3:1}, {5:1}, {7:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1, 12:1}, {10:1}, {5:1, 6:1, 7:1, 8:1, 12:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {5:1, 6:1, 7:1, 8:1}, {11:1}, {11:1}, {11:1}, {11:1}, {11:1}, {11:1}, {11:1}, {11:1}, {15:1}, {15:1}, {13:1}, {13:1}, {13:1}, {15:1}, {4:1}, {14:1}, {15:1}, {13:1}, {11:1}, {10:1}, {9:1}];
function dispatchEventImpl(evt, elem, listener){
  var prevCurrentEvent;
  if (elem == sCaptureElem) {
    if ($eventGetTypeInt(($clinit_4() , evt).type) == 8192) {
      sCaptureElem = null;
    }
  }
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  try {
    listener.onBrowserEvent(evt);
  }
   finally {
    currentEvent = prevCurrentEvent;
  }
}

function previewEvent(evt){
  return true;
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem = null;
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = $GwtEvent$Type(new GwtEvent$Type())), handler);
}

function addHandler(type, handler){
  return $addHandler_0(getHandlers(), type, handler);
}

function fireClosedImpl(){
  if (closeHandlersInitialized) {
    fire(getHandlers());
  }
}

function fireClosingImpl(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = ($clinit_62() , new Window$ClosingEvent());
    fireEvent(event_0);
    return null;
  }
  return null;
}

function fireEvent(event_0){
  if (handlers) {
    $fireEvent_0(handlers, event_0);
  }
}

function getHandlers(){
  if (!handlers) {
    handlers = $Window$WindowHandlers(new Window$WindowHandlers());
  }
  return handlers;
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler($getWindowCloseHandlerMethodString(), '__gwt_initWindowCloseHandler');
    closeHandlersInitialized = true;
  }
}

var closeHandlersInitialized = false, handlers = null;
function $clinit_62(){
  $clinit_62 = nullMethod;
  TYPE_1 = $GwtEvent$Type(new GwtEvent$Type());
}

function dispatch_1(handler){
  null.nullMethod();
}

function getAssociatedType_1(){
  return TYPE_1;
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent.prototype = new GwtEvent();
_.dispatch = dispatch_1;
_.getAssociatedType = getAssociatedType_1;
_.typeId$ = 0;
var TYPE_1;
function $Window$WindowHandlers(this$static){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry());
  this$static.source = null;
  this$static.isReverseOrder = false;
  return this$static;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers.prototype = new HandlerManager();
_.typeId$ = 9;
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  dispatchEvent_1 = function(){
    var oldEventTarget = ($clinit_3() , currentEventTarget);
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEvent($wnd.event)) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentElement;
    }
    if (listener) {
      if (!(listener != null && (listener.typeMarker$ != nullMethod && listener.typeId$ != 2)) && (listener != null && canCast(listener.typeId$, 6))) {
        dispatchEventImpl($wnd.event, curElem, listener);
      }
    }
    currentEventTarget = oldEventTarget;
  }
  ;
  dispatchDblClickEvent = function(){
    var newEvent = $doc.createEventObject();
    if ($wnd.event.returnValue == null) {
      $wnd.event.srcElement.fireEvent('onclick', newEvent);
    }
    if (this.__eventBits & 2) {
      dispatchEvent_1.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEvent($wnd.event);
    }
  }
  ;
  var bodyDispatcher = function(){
    dispatchEvent_1.call($doc.body);
  }
  ;
  var bodyDblClickDispatcher = function(){
    dispatchDblClickEvent.call($doc.body);
  }
  ;
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  if (chMask & 1)
    elem.onclick = bits & 1?dispatchEvent_1:null;
  if (chMask & 3)
    elem.ondblclick = bits & 3?dispatchDblClickEvent:null;
  if (chMask & 4)
    elem.onmousedown = bits & 4?dispatchEvent_1:null;
  if (chMask & 8)
    elem.onmouseup = bits & 8?dispatchEvent_1:null;
  if (chMask & 16)
    elem.onmouseover = bits & 16?dispatchEvent_1:null;
  if (chMask & 32)
    elem.onmouseout = bits & 32?dispatchEvent_1:null;
  if (chMask & 64)
    elem.onmousemove = bits & 64?dispatchEvent_1:null;
  if (chMask & 128)
    elem.onkeydown = bits & 128?dispatchEvent_1:null;
  if (chMask & 256)
    elem.onkeypress = bits & 256?dispatchEvent_1:null;
  if (chMask & 512)
    elem.onkeyup = bits & 512?dispatchEvent_1:null;
  if (chMask & 1024)
    elem.onchange = bits & 1024?dispatchEvent_1:null;
  if (chMask & 2048)
    elem.onfocus = bits & 2048?dispatchEvent_1:null;
  if (chMask & 4096)
    elem.onblur = bits & 4096?dispatchEvent_1:null;
  if (chMask & 8192)
    elem.onlosecapture = bits & 8192?dispatchEvent_1:null;
  if (chMask & 16384)
    elem.onscroll = bits & 16384?dispatchEvent_1:null;
  if (chMask & 32768)
    elem.onload = bits & 32768?dispatchEvent_1:null;
  if (chMask & 65536)
    elem.onerror = bits & 65536?dispatchEvent_1:null;
  if (chMask & 131072)
    elem.onmousewheel = bits & 131072?dispatchEvent_1:null;
  if (chMask & 262144)
    elem.oncontextmenu = bits & 262144?dispatchEvent_1:null;
}

var dispatchDblClickEvent = null, dispatchEvent_1 = null;
function $getWindowCloseHandlerMethodString(){
  return function(beforeunload, unload){
    var wnd = window, oldOnBeforeUnload = wnd.onbeforeunload, oldOnUnload = wnd.onunload;
    wnd.onbeforeunload = function(evt){
      var ret, oldRet;
      try {
        ret = beforeunload();
      }
       finally {
        oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
      }
      if (ret != null) {
        return ret;
      }
      if (oldRet != null) {
        return oldRet;
      }
    }
    ;
    wnd.onunload = function(evt){
      try {
        unload();
      }
       finally {
        oldOnUnload && oldOnUnload(evt);
        wnd.onresize = null;
        wnd.onscroll = null;
        wnd.onbeforeunload = null;
        wnd.onunload = null;
      }
    }
    ;
    wnd.__gwt_initWindowCloseHandler = undefined;
  }
  .toString();
}

function $initHandler(initFunc, funcName){
  var scriptElem;
  initFunc = $replaceFirst(initFunc, 'function', 'function ' + funcName);
  scriptElem = $createScriptElement(($clinit_4() , $doc), initFunc);
  $doc.body.appendChild(scriptElem);
  $initWindowCloseHandlerImpl();
  $doc.body.removeChild(scriptElem);
}

function $initWindowCloseHandlerImpl(){
  $wnd.__gwt_initWindowCloseHandler(function(){
    return fireClosingImpl();
  }
  , function(){
    fireClosedImpl();
  }
  );
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0();
_.typeId$ = 10;
_.element = null;
function $addDomHandler(this$static, handler, type){
  $sinkEvents(this$static, $eventGetTypeInt(type.name_0));
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager(), this$static)):this$static.handlerManager, type, handler);
}

function $fireEvent_1(this$static, event_0){
  if (this$static.handlerManager) {
    $fireEvent_0(this$static.handlerManager, event_0);
  }
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException();
  }
  this$static.attached = true;
  this$static.element.__listener = this$static;
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  if (bitsToAdd > 0) {
    $sinkEvents(this$static, bitsToAdd);
  }
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(($clinit_4() , event_0).type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && $isOrHasChild(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException();
  }
  try {
    this$static.onUnload();
  }
   finally {
    this$static.doDetachChildren();
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_90();
    if ($containsKey(widgetsToDetach.map, this$static)) {
      $onDetach(this$static);
      $remove_2(widgetsToDetach.map, this$static) != null;
    }
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException();
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    if (!!oldParent && oldParent.attached) {
      $onDetach(this$static);
    }
    this$static.parent_0 = null;
  }
   else {
    if (oldParent) {
      throw new IllegalStateException();
    }
    this$static.parent_0 = parent_0;
    if (parent_0.attached) {
      $onAttach(this$static);
    }
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  if (this$static.eventsToSink == -1) {
    sinkEvents(this$static.element, eventBitsToAdd | (this$static.element.__eventBits || 0));
  }
   else {
    this$static.eventsToSink |= eventBitsToAdd;
  }
}

function doAttachChildren_0(){
}

function doDetachChildren_0(){
}

function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
}

function onLoad_0(){
}

function onUnload_0(){
}

function Widget(){
}

_ = Widget.prototype = new UIObject();
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.onBrowserEvent = onBrowserEvent_0;
_.onLoad = onLoad_0;
_.onUnload = onUnload_0;
_.typeId$ = 11;
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.parent_0 = null;
function doAttachChildren(){
  var child, it;
  for (it = this.iterator(); it.index < it.this$0.size - 1;) {
    child = $next(it);
    $onAttach(child);
  }
}

function doDetachChildren(){
  var child, it;
  for (it = this.iterator(); it.index < it.this$0.size - 1;) {
    child = $next(it);
    $onDetach(child);
  }
}

function onLoad(){
}

function onUnload(){
}

function Panel(){
}

_ = Panel.prototype = new Widget();
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.onLoad = onLoad;
_.onUnload = onUnload;
_.typeId$ = 12;
function $add_0(this$static, child, container){
  $removeFromParent(child);
  $add_2(this$static.children, child);
  container.appendChild(child.element);
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  $setParent(w, null);
  elem = w.element;
  ($clinit_4() , elem).parentElement.removeChild(elem);
  $remove_1(this$static.children, w);
  return true;
}

function iterator(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator(), this.children);
}

function remove_0(w){
  return $remove(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel();
_.iterator = iterator;
_.remove = remove_0;
_.typeId$ = 13;
function $add(this$static, w){
  $add_0(this$static, w, this$static.element);
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function remove(w){
  var removed;
  removed = $remove(this, w);
  if (removed) {
    changeToStaticPositioning(w.element);
  }
  return removed;
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel();
_.remove = remove;
_.typeId$ = 14;
function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel();
_.typeId$ = 15;
_.body_0 = null;
_.table = null;
function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget();
_.typeId$ = 16;
function $clinit_77(){
  $clinit_77 = nullMethod;
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'center');
  ALIGN_LEFT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'left');
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant(), 'right');
  ALIGN_DEFAULT = ALIGN_LEFT;
}

var ALIGN_DEFAULT, ALIGN_LEFT;
function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  this$static.textAlignString = textAlignString;
  return this$static;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0();
_.typeId$ = 0;
_.textAlignString = null;
function $clinit_82(){
  $clinit_82 = nullMethod;
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'bottom');
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'middle');
  ALIGN_TOP = $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant(), 'top');
}

var ALIGN_TOP;
function $HasVerticalAlignment$VerticalAlignmentConstant(this$static, verticalAlignString){
  this$static.verticalAlignString = verticalAlignString;
  return this$static;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0();
_.typeId$ = 0;
_.verticalAlignString = null;
function $Label(this$static){
  this$static.element = ($clinit_4() , $doc).createElement('div');
  this$static.element['className'] = 'gwt-Label';
  return this$static;
}

function Label(){
}

_ = Label.prototype = new Widget();
_.typeId$ = 17;
function $clinit_90(){
  $clinit_90 = nullMethod;
  rootPanels = $HashMap(new HashMap());
  widgetsToDetach = $HashSet(new HashSet());
}

function $RootPanel(this$static, elem){
  $clinit_90();
  this$static.children = $WidgetCollection(new WidgetCollection());
  this$static.element = elem;
  $onAttach(this$static);
  return this$static;
}

function detachWidgets(){
  var outerIter, entry;
  $clinit_90();
  var widget, widget$iterator;
  for (widget$iterator = (outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $keySet(widgetsToDetach.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter)); $hasNext(widget$iterator.val$outerIter.iter);) {
    widget = dynamicCast((entry = dynamicCast($next_0(widget$iterator.val$outerIter.iter), 13) , entry.getKey()), 8);
    if (widget.attached) {
      $onDetach(widget);
    }
  }
  $clearImpl(widgetsToDetach.map);
  $clearImpl(rootPanels);
}

function get_0(id){
  $clinit_90();
  var rp;
  rp = dynamicCast($get(rootPanels, id), 12);
  if (rp) {
    return rp;
  }
  if (rootPanels.size == 0) {
    addCloseHandler(new RootPanel$1());
  }
  rp = $RootPanel$DefaultRootPanel(new RootPanel$DefaultRootPanel());
  $put(rootPanels, id, rp);
  $add_5(widgetsToDetach, rp);
  return rp;
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel();
_.typeId$ = 18;
var rootPanels, widgetsToDetach;
function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0();
_.typeId$ = 19;
function $clinit_89(){
  $clinit_89 = nullMethod;
  $clinit_90();
}

function $RootPanel$DefaultRootPanel(this$static){
  $clinit_89();
  $RootPanel(this$static, $doc.body);
  return this$static;
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel.prototype = new RootPanel();
_.typeId$ = 20;
function onBrowserEvent(event_0){
  var type;
  type = $eventGetTypeInt(($clinit_4() , event_0).type);
  if ((type & 896) != 0) {
    $onBrowserEvent(this, event_0);
  }
   else {
    $onBrowserEvent(this, event_0);
  }
}

function TextBoxBase(){
}

_ = TextBoxBase.prototype = new FocusWidget();
_.onBrowserEvent = onBrowserEvent;
_.typeId$ = 21;
function $TextBox(this$static){
  var e;
  $TextBox_0(this$static, (e = ($clinit_4() , $doc).createElement('INPUT') , e.type = 'text' , e), 'gwt-TextBox');
  return this$static;
}

function $TextBox_0(this$static, element, styleName){
  this$static.element = element;
  this$static.element.tabIndex = 0;
  if (styleName != null) {
    this$static.element['className'] = styleName;
  }
  return this$static;
}

function TextBox(){
}

_ = TextBox.prototype = new TextBoxBase();
_.typeId$ = 22;
function $VerticalPanel(this$static){
  this$static.children = $WidgetCollection(new WidgetCollection());
  this$static.table = ($clinit_4() , $doc).createElement('table');
  this$static.body_0 = $doc.createElement('tbody');
  this$static.table.appendChild(this$static.body_0);
  this$static.element = this$static.table;
  this$static.horzAlign = ($clinit_77() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_82() , ALIGN_TOP);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_1(this$static, w){
  var td_0, tr, td;
  tr = ($clinit_4() , $doc).createElement('tr');
  td_0 = (td = $doc.createElement('td') , (td['align'] = this$static.horzAlign.textAlignString , undefined) , (td.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , undefined) , td);
  tr.appendChild(td_0);
  this$static.body_0.appendChild(tr);
  $removeFromParent(w);
  $add_2(this$static.children, w);
  td_0.appendChild(w.element);
  $setParent(w, this$static);
}

function remove_1(w){
  var removed, td;
  td = ($clinit_4() , w.element).parentElement;
  removed = $remove(this, w);
  if (removed) {
    this.body_0.removeChild(td.parentElement);
  }
  return removed;
}

function VerticalPanel(){
}

_ = VerticalPanel.prototype = new CellPanel();
_.remove = remove_1;
_.typeId$ = 23;
function $WidgetCollection(this$static){
  this$static.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 0, 8, 4, 0);
  return this$static;
}

function $add_2(this$static, w){
  $insert(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw new IndexOutOfBoundsException();
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 0, 8, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_0(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw new IndexOutOfBoundsException();
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_1(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw new NoSuchElementException();
  }
  $remove_0(this$static, index);
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0();
_.typeId$ = 0;
_.array = null;
_.size = 0;
function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $next(this$static){
  if (this$static.index >= this$static.this$0.size) {
    throw new NoSuchElementException();
  }
  return this$static.this$0.array[++this$static.index];
}

function hasNext(){
  return this.index < this.this$0.size - 1;
}

function next_0(){
  return $next(this);
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0();
_.hasNext = hasNext;
_.next = next_0;
_.typeId$ = 0;
_.index = -1;
_.this$0 = null;
function Throwable(){
}

_ = Throwable.prototype = new Object_0();
_.typeId$ = 3;
function Exception(){
}

_ = Exception.prototype = new Throwable();
_.typeId$ = 4;
function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception();
_.typeId$ = 5;
function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException();
_.typeId$ = 25;
function createForArray(packageName, className){
  var clazz;
  clazz = new Class();
  return clazz;
}

function Class(){
}

_ = Class.prototype = new Object_0();
_.typeId$ = 0;
function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException();
_.typeId$ = 28;
function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException();
_.typeId$ = 29;
function $IndexOutOfBoundsException(this$static, message){
  return this$static;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException();
_.typeId$ = 30;
function $replaceFirst(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex), replace);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    if (replaceStr.charCodeAt(pos + 1) == 36) {
      replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos);
    }
     else {
      replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos);
    }
  }
  return replaceStr;
}

function equals_1(other){
  if (!(other != null && canCast(other.typeId$, 1))) {
    return false;
  }
  return String(this) == other;
}

function hashCode_3(){
  return getHashCode_0(this);
}

_ = String.prototype;
_.equals$ = equals_1;
_.hashCode$ = hashCode_3;
_.typeId$ = 2;
function $clinit_117(){
  $clinit_117 = nullMethod;
  back = {};
  front = {};
}

function compute(str){
  var hashCode, i, inc, n;
  n = str.length;
  inc = n < 64?1:~~(n / 32);
  hashCode = 0;
  for (i = 0; i < n; i += inc) {
    hashCode <<= 1;
    hashCode += str.charCodeAt(i);
  }
  hashCode |= 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_117();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back[key];
  if (result == null) {
    result = compute(str);
  }
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back, count_0 = 0, front;
function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException();
_.typeId$ = 31;
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function add(o){
  throw new UnsupportedOperationException();
}

function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator(), o);
  return !!iter;
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0();
_.add = add;
_.contains_0 = contains;
_.typeId$ = 0;
function $keySet(this$static){
  var entrySet;
  entrySet = $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), this$static);
  return $AbstractMap$1(new AbstractMap$1(), this$static, entrySet);
}

function equals_4(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === this) {
    return true;
  }
  if (!(obj != null && canCast(obj.typeId$, 14))) {
    return false;
  }
  otherMap = dynamicCast(obj, 14);
  if (dynamicCast(this, 14).size != otherMap.size) {
    return false;
  }
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), otherMap).this$0); $hasNext(entry$iterator.iter);) {
    entry = dynamicCast($next_0(entry$iterator.iter), 13);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?dynamicCast(this, 14).nullSlotLive:otherKey != null && canCast(otherKey.typeId$, 1)?$hasStringValue(dynamicCast(this, 14), dynamicCast(otherKey, 1)):$hasHashValue(dynamicCast(this, 14), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?dynamicCast(this, 14).nullSlot:otherKey != null && canCast(otherKey.typeId$, 1)?dynamicCast(this, 14).stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(dynamicCast(this, 14), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}

function hashCode_6(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), dynamicCast(this, 14)).this$0); $hasNext(entry$iterator.iter);) {
    entry = dynamicCast($next_0(entry$iterator.iter), 13);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0();
_.equals$ = equals_4;
_.hashCode$ = hashCode_6;
_.typeId$ = 0;
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new_$(this$static, key.substring(1));
      dest.add(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey(this$static, key){
  return key == null?this$static.nullSlotLive:key != null && canCast(key.typeId$, 1)?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $get(this$static, key){
  return key == null?this$static.nullSlot:key != null && canCast(key.typeId$, 1)?this$static.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put(this$static, key, value){
  return key == null?$putNullSlot(this$static, value):key != null && canCast(key.typeId$, 1)?$putStringValue(this$static, dynamicCast(key, 1), value):$putHashValue(this$static, key, value, ~~hashCode__devirtual$(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = $MapEntryImpl(new MapEntryImpl(), key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
  }
   else {
    ++this$static.size;
  }
  stringMap[key] = value;
  return result;
}

function $remove_2(this$static, key){
  return !key?$removeNullSlot(this$static):$removeHashValue(this$static, key, ~~(key.$H || (key.$H = ++sNextHashId)));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        if (array.length == 1) {
          delete this$static.hashCodeMap[hashCode];
        }
         else {
          array.splice(i, 1);
        }
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function equalsBridge(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap();
_.equalsBridge = equalsBridge;
_.typeId$ = 0;
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function equals_5(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 15))) {
    return false;
  }
  other = dynamicCast(o, 15);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator(); iter.hasNext();) {
    otherItem = iter.next();
    if (!this.contains_0(otherItem)) {
      return false;
    }
  }
  return true;
}

function hashCode_7(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator(); iter.hasNext();) {
    next = iter.next();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection();
_.equals$ = equals_5;
_.hashCode$ = hashCode_7;
_.typeId$ = 32;
function $AbstractHashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $contains(this$static, o){
  var entry, key, value;
  if (o != null && canCast(o.typeId$, 13)) {
    entry = dynamicCast(o, 13);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get(this$static.this$0, key);
      return $equals_0(entry.getValue(), value);
    }
  }
  return false;
}

function contains_0(o){
  return $contains(this, o);
}

function iterator_0(){
  return $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), this.this$0);
}

function size_0(){
  return this.this$0.size;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet.prototype = new AbstractSet();
_.contains_0 = contains_0;
_.iterator = iterator_0;
_.size_0 = size_0;
_.typeId$ = 33;
_.this$0 = null;
function $AbstractHashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList());
  if (this$static.this$0.nullSlotLive) {
    $add_4(list, $AbstractHashMap$MapEntryNull(new AbstractHashMap$MapEntryNull(), this$static.this$0));
  }
  $addAllStringEntries(this$static.this$0, list);
  $addAllHashEntries(this$static.this$0, list);
  this$static.iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), list);
  return this$static;
}

function hasNext_0(){
  return $hasNext(this.iter);
}

function next_1(){
  return dynamicCast($next_0(this.iter), 13);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator.prototype = new Object_0();
_.hasNext = hasNext_0;
_.next = next_1;
_.typeId$ = 0;
_.iter = null;
_.this$0 = null;
function equals_3(other){
  var entry;
  if (other != null && canCast(other.typeId$, 13)) {
    entry = dynamicCast(other, 13);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}

function hashCode_5(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  if (this.getKey() != null) {
    keyHash = hashCode__devirtual$(this.getKey());
  }
  if (this.getValue() != null) {
    valueHash = hashCode__devirtual$(this.getValue());
  }
  return keyHash ^ valueHash;
}

function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0();
_.equals$ = equals_3;
_.hashCode$ = hashCode_5;
_.typeId$ = 34;
function $AbstractHashMap$MapEntryNull(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getKey(){
  return null;
}

function getValue(){
  return this.this$0.nullSlot;
}

function setValue(object){
  return $putNullSlot(this.this$0, object);
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry();
_.getKey = getKey;
_.getValue = getValue;
_.setValue = setValue;
_.typeId$ = 35;
_.this$0 = null;
function $AbstractHashMap$MapEntryString(this$static, key, this$0){
  this$static.this$0 = this$0;
  this$static.key = key;
  return this$static;
}

function getKey_0(){
  return this.key;
}

function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}

function new_$(this$outer, key){
  return $AbstractHashMap$MapEntryString(new AbstractHashMap$MapEntryString(), key, this$outer);
}

function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry();
_.getKey = getKey_0;
_.getValue = getValue_0;
_.setValue = setValue_0;
_.typeId$ = 36;
_.key = null;
_.this$0 = null;
function add_0(obj){
  $add_3(this, this.size_0(), obj);
  return true;
}

function checkIndex(index, size){
  if (index < 0 || index >= size) {
    indexOutOfBounds(index, size);
  }
}

function equals_2(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 4))) {
    return false;
  }
  other = dynamicCast(o, 4);
  if (this.size_0() != other.size) {
    return false;
  }
  iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 4));
  iterOther = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), other);
  while (iter.i < iter.this$0.size) {
    elem = $next_0(iter);
    elemOther = $next_0(iterOther);
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function hashCode_4(){
  var iter, k, obj;
  k = 1;
  iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 4));
  while (iter.i < iter.this$0.size) {
    obj = $next_0(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function indexOutOfBounds(index, size){
  throw $IndexOutOfBoundsException(new IndexOutOfBoundsException(), 'Index: ' + index + ', Size: ' + size);
}

function iterator_1(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl(), dynamicCast(this, 4));
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection();
_.add = add_0;
_.equals$ = equals_2;
_.hashCode$ = hashCode_4;
_.iterator = iterator_1;
_.typeId$ = 0;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext(this$static){
  return this$static.i < this$static.this$0.size;
}

function $next_0(this$static){
  if (this$static.i >= this$static.this$0.size) {
    throw new NoSuchElementException();
  }
  return $get_0(this$static.this$0, this$static.i++);
}

function hasNext_1(){
  return this.i < this.this$0.size;
}

function next_2(){
  return $next_0(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0();
_.hasNext = hasNext_1;
_.next = next_2;
_.typeId$ = 0;
_.i = 0;
_.this$0 = null;
function $AbstractMap$1(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function contains_1(key){
  return $containsKey(this.this$0, key);
}

function iterator_2(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), this.val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter);
}

function size_1(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet();
_.contains_0 = contains_1;
_.iterator = iterator_2;
_.size_0 = size_1;
_.typeId$ = 37;
_.this$0 = null;
_.val$entrySet = null;
function $AbstractMap$1$1(this$static, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function hasNext_2(){
  return $hasNext(this.val$outerIter.iter);
}

function next_3(){
  var entry;
  return entry = dynamicCast($next_0(this.val$outerIter.iter), 13) , entry.getKey();
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1.prototype = new Object_0();
_.hasNext = hasNext_2;
_.next = next_3;
_.typeId$ = 0;
_.val$outerIter = null;
function $ArrayList(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 0, 0, 0, 0);
  this$static.size = 0;
  return this$static;
}

function $add_4(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $add_3(this$static, index, o){
  if (index < 0 || index > this$static.size) {
    indexOutOfBounds(index, this$static.size);
  }
  this$static.array.splice(index, 0, o);
  ++this$static.size;
}

function $get_0(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_1(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function add_1(o){
  return setCheck(this.array, this.size++, o) , true;
}

function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}

function size_2(){
  return this.size;
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList();
_.add = add_1;
_.contains_0 = contains_2;
_.size_0 = size_2;
_.typeId$ = 38;
_.array = null;
_.size = 0;
function $HashMap(this$static){
  $clearImpl(this$static);
  return this$static;
}

function $equals_0(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractHashMap();
_.typeId$ = 39;
function $HashSet(this$static){
  this$static.map = $HashMap(new HashMap());
  return this$static;
}

function $add_5(this$static, o){
  var old;
  old = $put(this$static.map, o, this$static);
  return old == null;
}

function add_2(o){
  var old;
  return old = $put(this.map, o, this) , old == null;
}

function contains_3(o){
  return $containsKey(this.map, o);
}

function iterator_3(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $keySet(this.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1(), outerIter);
}

function size_3(){
  return this.map.size;
}

function HashSet(){
}

_ = HashSet.prototype = new AbstractSet();
_.add = add_2;
_.contains_0 = contains_3;
_.iterator = iterator_3;
_.size_0 = size_3;
_.typeId$ = 40;
_.map = null;
function $MapEntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value = value;
  return this$static;
}

function getKey_1(){
  return this.key;
}

function getValue_1(){
  return this.value;
}

function setValue_1(value){
  var old;
  old = this.value;
  this.value = value;
  return old;
}

function MapEntryImpl(){
}

_ = MapEntryImpl.prototype = new AbstractMapEntry();
_.getKey = getKey_1;
_.getValue = getValue_1;
_.setValue = setValue_1;
_.typeId$ = 41;
_.key = null;
_.value = null;
function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException();
_.typeId$ = 42;
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

function $registerStateChangeCallback(){
  var wave = $wnd.wave;
  if (wave) {
    wave.setStateCallback(stateUpdated);
  }
}

function $updateState(this$static){
  var newState;
  newState = $HashMap(new HashMap());
  $put(newState, 'text', $trim($getPropertyString(this$static.mTextBox.element, 'value')));
  submitDelta_0(newState);
}

function dummyNeedsRpcMethod(feature){
}

function stateUpdated(){
  ($clinit_4() , mInstance.mLabel.element).innerText = $wnd.wave.getState().get('text') || '';
}

function G(){
}

_ = G.prototype = new Gadget();
_.dummyNeedsRpcMethod = dummyNeedsRpcMethod;
_.typeId$ = 0;
_.mLabel = null;
_.mTextBox = null;
var mInstance = null;
function $G$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function G$1(){
}

_ = G$1.prototype = new Object_0();
_.typeId$ = 43;
_.this$0 = null;
function $GGadgetImpl(this$static){
  var vp;
  this$static.dummyNeedsRpcMethod(new RpcFeature());
  mInstance = this$static;
  vp = $VerticalPanel(new VerticalPanel());
  this$static.mLabel = $Label(new Label());
  this$static.mLabel.element.style['height'] = '30';
  ($clinit_4() , this$static.mLabel.element).innerText = 'Initial Wave State';
  $add_1(vp, this$static.mLabel);
  this$static.mTextBox = $TextBox(new TextBox());
  $add_1(vp, this$static.mTextBox);
  $addDomHandler(this$static.mTextBox, $G$1(new G$1(), this$static), ($clinit_30() , $clinit_30() , TYPE));
  $add(($clinit_90() , get_0(null)), vp);
  $registerStateChangeCallback();
  return this$static;
}

function GGadgetImpl(){
}

_ = GGadgetImpl.prototype = new G();
_.typeId$ = 0;
function RpcFeature(){
}

_ = RpcFeature.prototype = new Object_0();
_.typeId$ = 0;
function addValue(map, key, value){
  if (!map) {
    map = {};
  }
  map[key] = value;
  return map;
}

function submitDelta_0(newValues){
  var entry, entry$iterator, json;
  json = null;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator(), $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet(), newValues).this$0); $hasNext(entry$iterator.iter);) {
    entry = dynamicCast($next_0(entry$iterator.iter), 13);
    json = addValue(json, dynamicCast(entry.getKey(), 1), dynamicCast(entry.getValue(), 1));
  }
  $wnd.wave.getState().submitDelta(json);
}

function init(){
  !!$stats && $stats({moduleName:$moduleName, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date()).getTime(), type:'onModuleLoadStart', className:'wave.test.client.G'});
  $GGadgetImpl(new GGadgetImpl());
}

function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      init();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    init();
  }
}

function nullMethod(){
}

var _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;');
$stats && $stats({moduleName:'g',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (g) g.onScriptLoad(gwtOnLoad);
})();
