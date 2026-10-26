import{sampleInspect as base,drawRate,drawEnd}from "/02_共用静止与衔接动作/共用模型/统一运行库/objects/9ddc3454bd96a323761cee2175b85dcf9be9a5bfed4028049b2679ee1e136b76/resource.mjs?instance=640701ea2155a5d6804a";
import{curve}from "/02_共用静止与衔接动作/共用模型/统一运行库/objects/b0605c244963edbdfde78e8546f7936706c3429ffe7d29088f8d6bb55c8b45e2/resource.mjs?instance=0a403b3a34fb2b5a598a";
export{drawRate,drawEnd};
export const strokeSlowdown=2.4,addedTime=2.25*(strokeSlowdown-1),total=10.5+addedTime;
export function sourceTime(t){return t<=2.7?t:t<2.7+2.25*strokeSlowdown?2.7+(t-2.7)/strokeSlowdown:t-addedTime}
export function sampleInspect(t){const s=sourceTime(t),v={...base(s)};
if(s>=2.7&&s<7.5){
 v.ParamHeadNod=curve([[2.7,.09],[3.32,.7],[4.5,.7],[4.95,.55],[6.3,.4],[7.5,.04]],s);
 v.ParamEyeBallY=curve([[2.7,-.5],[3.2,-.94],[4.5,-.94],[4.95,-.78],[6.3,-.7],[7.5,-.5]],s);
 v.ParamEyeBallX=curve([[2.7,.3],[3.32,.28],[3.9,.64],[4.5,.28],[4.95,.3],[6.3,.12],[7.5,-.18]],s);
 v.handProjection=1;v.contactHeight=12;
}
v.sourceTime=s;return v;}
