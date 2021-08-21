gdjs.sceneCode = {};
gdjs.sceneCode.GDVoitureObjects1_1final = [];

gdjs.sceneCode.GDVoitureObjects1= [];
gdjs.sceneCode.GDVoitureObjects2= [];
gdjs.sceneCode.GDVoitureObjects3= [];
gdjs.sceneCode.GDBatimentObjects1= [];
gdjs.sceneCode.GDBatimentObjects2= [];
gdjs.sceneCode.GDBatimentObjects3= [];
gdjs.sceneCode.GDFondObjects1= [];
gdjs.sceneCode.GDFondObjects2= [];
gdjs.sceneCode.GDFondObjects3= [];
gdjs.sceneCode.GDRouteObjects1= [];
gdjs.sceneCode.GDRouteObjects2= [];
gdjs.sceneCode.GDRouteObjects3= [];
gdjs.sceneCode.GDetincelleObjects1= [];
gdjs.sceneCode.GDetincelleObjects2= [];
gdjs.sceneCode.GDetincelleObjects3= [];
gdjs.sceneCode.GDsmokeObjects1= [];
gdjs.sceneCode.GDsmokeObjects2= [];
gdjs.sceneCode.GDsmokeObjects3= [];
gdjs.sceneCode.GDfreinObjects1= [];
gdjs.sceneCode.GDfreinObjects2= [];
gdjs.sceneCode.GDfreinObjects3= [];
gdjs.sceneCode.GDSpeedObjects1= [];
gdjs.sceneCode.GDSpeedObjects2= [];
gdjs.sceneCode.GDSpeedObjects3= [];
gdjs.sceneCode.GDExplanationObjects1= [];
gdjs.sceneCode.GDExplanationObjects2= [];
gdjs.sceneCode.GDExplanationObjects3= [];
gdjs.sceneCode.GDbtnTurnLeftObjects1= [];
gdjs.sceneCode.GDbtnTurnLeftObjects2= [];
gdjs.sceneCode.GDbtnTurnLeftObjects3= [];
gdjs.sceneCode.GDbtnTurnRightObjects1= [];
gdjs.sceneCode.GDbtnTurnRightObjects2= [];
gdjs.sceneCode.GDbtnTurnRightObjects3= [];
gdjs.sceneCode.GDbtnAccelerateObjects1= [];
gdjs.sceneCode.GDbtnAccelerateObjects2= [];
gdjs.sceneCode.GDbtnAccelerateObjects3= [];
gdjs.sceneCode.GDbtnBreakObjects1= [];
gdjs.sceneCode.GDbtnBreakObjects2= [];
gdjs.sceneCode.GDbtnBreakObjects3= [];

gdjs.sceneCode.conditionTrue_0 = {val:false};
gdjs.sceneCode.condition0IsTrue_0 = {val:false};
gdjs.sceneCode.condition1IsTrue_0 = {val:false};
gdjs.sceneCode.condition2IsTrue_0 = {val:false};
gdjs.sceneCode.condition3IsTrue_0 = {val:false};
gdjs.sceneCode.conditionTrue_1 = {val:false};
gdjs.sceneCode.condition0IsTrue_1 = {val:false};
gdjs.sceneCode.condition1IsTrue_1 = {val:false};
gdjs.sceneCode.condition2IsTrue_1 = {val:false};
gdjs.sceneCode.condition3IsTrue_1 = {val:false};


gdjs.sceneCode.eventsList0 = function(runtimeScene) {

{



}


{


{
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "vroom.wav", 1, true, 100, 1);
}}

}


{



}


{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "touch");
}}

}


};gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnTurnRightObjects2Objects = Hashtable.newFrom({"btnTurnRight": gdjs.sceneCode.GDbtnTurnRightObjects2});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnTurnLeftObjects1Objects = Hashtable.newFrom({"btnTurnLeft": gdjs.sceneCode.GDbtnTurnLeftObjects1});gdjs.sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btnTurnRight"), gdjs.sceneCode.GDbtnTurnRightObjects2);

gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnTurnRightObjects2Objects, runtimeScene, true, false);
}if (gdjs.sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.sceneCode.GDVoitureObjects1, gdjs.sceneCode.GDVoitureObjects2);

{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects2.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects2[i].setDirectionOrAngle(gdjs.sceneCode.GDVoitureObjects2[i].getDirectionOrAngle() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnTurnLeft"), gdjs.sceneCode.GDbtnTurnLeftObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnTurnLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].setDirectionOrAngle(gdjs.sceneCode.GDVoitureObjects1[i].getDirectionOrAngle() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.sceneCode.eventsList2 = function(runtimeScene) {

{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.sceneCode.GDVoitureObjects1, gdjs.sceneCode.GDVoitureObjects2);

{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects2.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects2[i].setDirectionOrAngle(gdjs.sceneCode.GDVoitureObjects2[i].getDirectionOrAngle() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.sceneCode.GDVoitureObjects1, gdjs.sceneCode.GDVoitureObjects2);

{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects2.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects2[i].setDirectionOrAngle(gdjs.sceneCode.GDVoitureObjects2[i].getDirectionOrAngle() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{



}


{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "touch");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnAccelerateObjects1Objects = Hashtable.newFrom({"btnAccelerate": gdjs.sceneCode.GDbtnAccelerateObjects1});gdjs.sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btnAccelerate"), gdjs.sceneCode.GDbtnAccelerateObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnAccelerateObjects1Objects, runtimeScene, true, false);
}if (gdjs.sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")).add(300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


};gdjs.sceneCode.eventsList5 = function(runtimeScene) {

{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnBreakObjects1Objects = Hashtable.newFrom({"btnBreak": gdjs.sceneCode.GDbtnBreakObjects1});gdjs.sceneCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btnBreak"), gdjs.sceneCode.GDbtnBreakObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnBreakObjects1Objects, runtimeScene, true, false);
}if (gdjs.sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")).sub(200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


};gdjs.sceneCode.eventsList7 = function(runtimeScene) {

{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDfreinObjects1Objects = Hashtable.newFrom({"frein": gdjs.sceneCode.GDfreinObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDfreinObjects1Objects = Hashtable.newFrom({"frein": gdjs.sceneCode.GDfreinObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnBreakObjects2Objects = Hashtable.newFrom({"btnBreak": gdjs.sceneCode.GDbtnBreakObjects2});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDfreinObjects2Objects = Hashtable.newFrom({"frein": gdjs.sceneCode.GDfreinObjects2});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDfreinObjects2Objects = Hashtable.newFrom({"frein": gdjs.sceneCode.GDfreinObjects2});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnAccelerateObjects1Objects = Hashtable.newFrom({"btnAccelerate": gdjs.sceneCode.GDbtnAccelerateObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnBreakObjects1Objects = Hashtable.newFrom({"btnBreak": gdjs.sceneCode.GDbtnBreakObjects1});gdjs.sceneCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnBreak"), gdjs.sceneCode.GDbtnBreakObjects2);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
gdjs.sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects2.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects2[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects2[i].getVariables().get("acceleration")) > 150 ) {
        gdjs.sceneCode.condition0IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects2[k] = gdjs.sceneCode.GDVoitureObjects2[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects2.length = k;}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
gdjs.sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnBreakObjects2Objects, runtimeScene, true, false);
}if ( gdjs.sceneCode.condition1IsTrue_0.val ) {
{
gdjs.sceneCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "TraceFrein");
}}
}
if (gdjs.sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects2 */
gdjs.sceneCode.GDfreinObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDfreinObjects2Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDfreinObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.sceneCode.GDfreinObjects2.length ;i < len;++i) {
    gdjs.sceneCode.GDfreinObjects2[i].setDirectionOrAngle((( gdjs.sceneCode.GDVoitureObjects2.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects2[0].getDirectionOrAngle()));
}
}{for(var i = 0, len = gdjs.sceneCode.GDfreinObjects2.length ;i < len;++i) {
    gdjs.sceneCode.GDfreinObjects2[i].setZOrder(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TraceFrein");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnAccelerate"), gdjs.sceneCode.GDbtnAccelerateObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnBreak"), gdjs.sceneCode.GDbtnBreakObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
gdjs.sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")) < 20 ) {
        gdjs.sceneCode.condition0IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
gdjs.sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnAccelerateObjects1Objects, runtimeScene, true, false);
}if ( gdjs.sceneCode.condition1IsTrue_0.val ) {
{
gdjs.sceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDbtnBreakObjects1Objects, runtimeScene, true, false);
}}
}
if (gdjs.sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("Demarrage rapide")).setNumber(1);
}
}}

}


};gdjs.sceneCode.eventsList9 = function(runtimeScene) {

{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects = Hashtable.newFrom({"smoke": gdjs.sceneCode.GDsmokeObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects = Hashtable.newFrom({"smoke": gdjs.sceneCode.GDsmokeObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDVoitureObjects1Objects = Hashtable.newFrom({"Voiture": gdjs.sceneCode.GDVoitureObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDBatimentObjects1Objects = Hashtable.newFrom({"Batiment": gdjs.sceneCode.GDBatimentObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDBatimentObjects1Objects = Hashtable.newFrom({"Batiment": gdjs.sceneCode.GDBatimentObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDVoitureObjects1Objects = Hashtable.newFrom({"Voiture": gdjs.sceneCode.GDVoitureObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDBatimentObjects1Objects = Hashtable.newFrom({"Batiment": gdjs.sceneCode.GDBatimentObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDetincelleObjects1Objects = Hashtable.newFrom({"etincelle": gdjs.sceneCode.GDetincelleObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDetincelleObjects1Objects = Hashtable.newFrom({"etincelle": gdjs.sceneCode.GDetincelleObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDetincelleObjects1Objects = Hashtable.newFrom({"etincelle": gdjs.sceneCode.GDetincelleObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects = Hashtable.newFrom({"smoke": gdjs.sceneCode.GDsmokeObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects = Hashtable.newFrom({"smoke": gdjs.sceneCode.GDsmokeObjects1});gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects = Hashtable.newFrom({"smoke": gdjs.sceneCode.GDsmokeObjects1});gdjs.sceneCode.eventsList10 = function(runtimeScene) {

{



}


{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);
{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 1, 0.1 + ((gdjs.RuntimeObject.getVariableNumber(((gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.sceneCode.GDVoitureObjects1[0].getVariables()).get("acceleration"))) / 200));
}}

}


{



}


{

gdjs.sceneCode.GDVoitureObjects1.length = 0;


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.sceneCode.conditionTrue_1 = gdjs.sceneCode.condition0IsTrue_0;
gdjs.sceneCode.GDVoitureObjects1_1final.length = 0;gdjs.sceneCode.condition0IsTrue_1.val = false;
gdjs.sceneCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects2);
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects2.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects2[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects2[i].getVariables().get("acceleration")) > 0 ) {
        gdjs.sceneCode.condition0IsTrue_1.val = true;
        gdjs.sceneCode.GDVoitureObjects2[k] = gdjs.sceneCode.GDVoitureObjects2[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects2.length = k;if( gdjs.sceneCode.condition0IsTrue_1.val ) {
    gdjs.sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.sceneCode.GDVoitureObjects2.length;j<jLen;++j) {
        if ( gdjs.sceneCode.GDVoitureObjects1_1final.indexOf(gdjs.sceneCode.GDVoitureObjects2[j]) === -1 )
            gdjs.sceneCode.GDVoitureObjects1_1final.push(gdjs.sceneCode.GDVoitureObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects2);
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects2.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects2[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects2[i].getVariables().get("acceleration")) < 0 ) {
        gdjs.sceneCode.condition1IsTrue_1.val = true;
        gdjs.sceneCode.GDVoitureObjects2[k] = gdjs.sceneCode.GDVoitureObjects2[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects2.length = k;if( gdjs.sceneCode.condition1IsTrue_1.val ) {
    gdjs.sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.sceneCode.GDVoitureObjects2.length;j<jLen;++j) {
        if ( gdjs.sceneCode.GDVoitureObjects1_1final.indexOf(gdjs.sceneCode.GDVoitureObjects2[j]) === -1 )
            gdjs.sceneCode.GDVoitureObjects1_1final.push(gdjs.sceneCode.GDVoitureObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.sceneCode.GDVoitureObjects1_1final, gdjs.sceneCode.GDVoitureObjects1);
}
}
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")) < 400 ) {
        gdjs.sceneCode.condition1IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}}
if (gdjs.sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")).add(300 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{



}


{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "touch");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")) > -(75) ) {
        gdjs.sceneCode.condition1IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}}
if (gdjs.sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")).sub(200 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{



}


{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "touch");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
gdjs.sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")) > 150 ) {
        gdjs.sceneCode.condition0IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
gdjs.sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.sceneCode.condition1IsTrue_0.val ) {
{
gdjs.sceneCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "TraceFrein");
}}
}
if (gdjs.sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
gdjs.sceneCode.GDfreinObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDfreinObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDfreinObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.sceneCode.GDfreinObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDfreinObjects1[i].setDirectionOrAngle((( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getDirectionOrAngle()));
}
}{for(var i = 0, len = gdjs.sceneCode.GDfreinObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDfreinObjects1[i].setZOrder(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TraceFrein");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
gdjs.sceneCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")) < 20 ) {
        gdjs.sceneCode.condition0IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
gdjs.sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.sceneCode.condition1IsTrue_0.val ) {
{
gdjs.sceneCode.condition2IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}}
}
if (gdjs.sceneCode.condition2IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("Demarrage rapide")).setNumber(1);
}
}}

}


{



}


{


gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "touch");
}if (gdjs.sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")) > 20 ) {
        gdjs.sceneCode.condition0IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("Demarrage rapide")) == 1 ) {
        gdjs.sceneCode.condition1IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}}
if (gdjs.sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
gdjs.sceneCode.GDsmokeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects, 0, 0, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")).setNumber(130);
}
}{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("Demarrage rapide")).setNumber(0);
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].addPolarForce((gdjs.sceneCode.GDVoitureObjects1[i].getDirectionOrAngle()), (gdjs.RuntimeObject.getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration"))), 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")) > 0 ) {
        gdjs.sceneCode.condition0IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}if (gdjs.sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")).sub(50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Batiment"), gdjs.sceneCode.GDBatimentObjects1);
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDVoitureObjects1Objects, gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDBatimentObjects1Objects, false, runtimeScene, false);
}if (gdjs.sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDBatimentObjects1 */
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].separateObjectsWithForces(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDBatimentObjects1Objects);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Batiment"), gdjs.sceneCode.GDBatimentObjects1);
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDVoitureObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDVoitureObjects1[i].getVariableNumber(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")) > 100 ) {
        gdjs.sceneCode.condition0IsTrue_0.val = true;
        gdjs.sceneCode.GDVoitureObjects1[k] = gdjs.sceneCode.GDVoitureObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDVoitureObjects1.length = k;}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
gdjs.sceneCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDVoitureObjects1Objects, gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDBatimentObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDVoitureObjects1 */
gdjs.sceneCode.GDetincelleObjects1.length = 0;

gdjs.sceneCode.GDsmokeObjects1.length = 0;

{for(var i = 0, len = gdjs.sceneCode.GDVoitureObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDVoitureObjects1[i].returnVariable(gdjs.sceneCode.GDVoitureObjects1[i].getVariables().get("acceleration")).setNumber(100);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDetincelleObjects1Objects, (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointX("Centre")), (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointY("Centre")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDetincelleObjects1Objects, (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointX("Centre")), (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointY("Centre")), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDetincelleObjects1Objects, (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointX("Centre")), (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointY("Centre")), "");
}{for(var i = 0, len = gdjs.sceneCode.GDetincelleObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDetincelleObjects1[i].addPolarForce(gdjs.random(360), gdjs.random(60) + 70, 0.5);
}
}{for(var i = 0, len = gdjs.sceneCode.GDetincelleObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDetincelleObjects1[i].setZOrder(6);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects, (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointX("")) + gdjs.random(60), (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointY("")) + gdjs.random(60), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects, (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointX("")) + gdjs.random(60), (( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getPointY("")) + gdjs.random(60), "");
}{for(var i = 0, len = gdjs.sceneCode.GDsmokeObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDsmokeObjects1[i].setZOrder(6);
}
}{for(var i = 0, len = gdjs.sceneCode.GDsmokeObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDsmokeObjects1[i].setAnimation(gdjs.random(2));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("smoke"), gdjs.sceneCode.GDsmokeObjects1);
{for(var i = 0, len = gdjs.sceneCode.GDsmokeObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDsmokeObjects1[i].addPolarForce(200 + gdjs.random(90), gdjs.random(50), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("etincelle"), gdjs.sceneCode.GDetincelleObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.sceneCode.GDetincelleObjects1.length;i<l;++i) {
    if ( gdjs.sceneCode.GDetincelleObjects1[i].getAverageForce().getLength() < 60 ) {
        gdjs.sceneCode.condition0IsTrue_0.val = true;
        gdjs.sceneCode.GDetincelleObjects1[k] = gdjs.sceneCode.GDetincelleObjects1[i];
        ++k;
    }
}
gdjs.sceneCode.GDetincelleObjects1.length = k;}if (gdjs.sceneCode.condition0IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDetincelleObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDetincelleObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDetincelleObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("smoke"), gdjs.sceneCode.GDsmokeObjects1);

gdjs.sceneCode.condition0IsTrue_0.val = false;
gdjs.sceneCode.condition1IsTrue_0.val = false;
{
gdjs.sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "SmokeDestroy");
}if ( gdjs.sceneCode.condition0IsTrue_0.val ) {
{
gdjs.sceneCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.sceneCode.mapOfGDgdjs_46sceneCode_46GDsmokeObjects1Objects);
}}
if (gdjs.sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.sceneCode.GDsmokeObjects1 */
{for(var i = 0, len = gdjs.sceneCode.GDsmokeObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDsmokeObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SmokeDestroy");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.sceneCode.GDSpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Voiture"), gdjs.sceneCode.GDVoitureObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.sceneCode.GDVoitureObjects1.length !== 0 ? gdjs.sceneCode.GDVoitureObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.sceneCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.sceneCode.GDSpeedObjects1[i].setString(gdjs.evtTools.common.toString(Math.round((( gdjs.sceneCode.GDVoitureObjects1.length === 0 ) ? 0 :gdjs.sceneCode.GDVoitureObjects1[0].getAverageForce().getLength()) / 2)) + " km/h");
}
}}

}


};

gdjs.sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.sceneCode.GDVoitureObjects1.length = 0;
gdjs.sceneCode.GDVoitureObjects2.length = 0;
gdjs.sceneCode.GDVoitureObjects3.length = 0;
gdjs.sceneCode.GDBatimentObjects1.length = 0;
gdjs.sceneCode.GDBatimentObjects2.length = 0;
gdjs.sceneCode.GDBatimentObjects3.length = 0;
gdjs.sceneCode.GDFondObjects1.length = 0;
gdjs.sceneCode.GDFondObjects2.length = 0;
gdjs.sceneCode.GDFondObjects3.length = 0;
gdjs.sceneCode.GDRouteObjects1.length = 0;
gdjs.sceneCode.GDRouteObjects2.length = 0;
gdjs.sceneCode.GDRouteObjects3.length = 0;
gdjs.sceneCode.GDetincelleObjects1.length = 0;
gdjs.sceneCode.GDetincelleObjects2.length = 0;
gdjs.sceneCode.GDetincelleObjects3.length = 0;
gdjs.sceneCode.GDsmokeObjects1.length = 0;
gdjs.sceneCode.GDsmokeObjects2.length = 0;
gdjs.sceneCode.GDsmokeObjects3.length = 0;
gdjs.sceneCode.GDfreinObjects1.length = 0;
gdjs.sceneCode.GDfreinObjects2.length = 0;
gdjs.sceneCode.GDfreinObjects3.length = 0;
gdjs.sceneCode.GDSpeedObjects1.length = 0;
gdjs.sceneCode.GDSpeedObjects2.length = 0;
gdjs.sceneCode.GDSpeedObjects3.length = 0;
gdjs.sceneCode.GDExplanationObjects1.length = 0;
gdjs.sceneCode.GDExplanationObjects2.length = 0;
gdjs.sceneCode.GDExplanationObjects3.length = 0;
gdjs.sceneCode.GDbtnTurnLeftObjects1.length = 0;
gdjs.sceneCode.GDbtnTurnLeftObjects2.length = 0;
gdjs.sceneCode.GDbtnTurnLeftObjects3.length = 0;
gdjs.sceneCode.GDbtnTurnRightObjects1.length = 0;
gdjs.sceneCode.GDbtnTurnRightObjects2.length = 0;
gdjs.sceneCode.GDbtnTurnRightObjects3.length = 0;
gdjs.sceneCode.GDbtnAccelerateObjects1.length = 0;
gdjs.sceneCode.GDbtnAccelerateObjects2.length = 0;
gdjs.sceneCode.GDbtnAccelerateObjects3.length = 0;
gdjs.sceneCode.GDbtnBreakObjects1.length = 0;
gdjs.sceneCode.GDbtnBreakObjects2.length = 0;
gdjs.sceneCode.GDbtnBreakObjects3.length = 0;

gdjs.sceneCode.eventsList10(runtimeScene);
return;

}

gdjs['sceneCode'] = gdjs.sceneCode;
