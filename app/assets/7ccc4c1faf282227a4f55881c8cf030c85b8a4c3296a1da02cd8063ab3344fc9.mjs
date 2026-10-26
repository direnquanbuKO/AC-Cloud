export const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
const smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
const delayedExclaim=t=>{const u=clamp((t-.6)/.18);return u*u*u*(10+u*(-15+6*u));};
export class Emotion{
 constructor(){this.elapsed=0;this.dose=0;this.releaseFade=1;this.level=0;this.activity=0;}
 grab(){this.elapsed=0;this.releaseFade=1;}
 step(dt,held,signal){
  this.elapsed+=dt;this.activity=signal;
  if(held){this.releaseFade=1;this.dose+=clamp((signal-45)/180)*dt;if(signal<45)this.dose=Math.max(0,this.dose-.025*dt);}
  else this.releaseFade*=Math.exp(-3*dt);
  const target=smooth((this.dose-3.2)/7);this.level+=(target-this.level)*(1-Math.exp(-3*dt));
 }
 sample(){const alert=smooth(this.elapsed/.16)*(1-smooth((this.elapsed-2.35)/.7))*(1-this.level),angry=this.level*this.releaseFade,bored=smooth((this.elapsed-2.35)/.7)*(1-angry)*this.releaseFade;
  return{alert:alert*this.releaseFade,bored,angry,exclaim:delayedExclaim(this.elapsed)*(1-smooth((this.elapsed-1.75)/.45))*(1-this.level)*this.releaseFade,time:this.elapsed,dose:this.dose,
   eyeOpen:1-.43*bored-.23*angry,eyeX:-.45*bored+.16*angry,eyeY:.48*alert-.12*bored-.05*angry,browL:.48*alert+.14*bored-.5*angry,browR:.38*alert-.08*bored-.5*angry,mouth:-.35*alert-.17*bored-.95*angry,browAngle:4*alert+12*angry,
   name:angry>.65?'明显生气':angry>.16?'渐渐恼火':alert>.4?'警觉':'嫌你无聊'};
 }
}
