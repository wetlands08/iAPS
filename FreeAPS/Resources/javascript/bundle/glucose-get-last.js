var freeaps_glucoseGetLast;(()=>{var e={6237:e=>{function r(e){return e.date||Date.parse(e.display_time)||Date.parse(e.dateString)}e.exports=function(e){for(var t=(e=e.filter((function(e){return e.glucose||e.sgv})).map((function(e){if(e.glucose=e.glucose||e.sgv,null!==e.glucose)return e})))[0],o=r(t),u=[],a=[],n=[],l=0,s=1;s<e.length;s++){if(void 0!==e[s]&&"cal"===e[s].type){l=s;break}if(void 0!==e[s]&&e[s].glucose>38&&e[s].device===t.device){var c,g=0;void 0!==(b=r(x=e[s]))&&void 0!==o?(c=Math.round((o-b)/6e4),g=(t.glucose-x.glucose)/c*5):console.error("Error: date field not found: cannot calculate avgdelta"),-2<c&&c<2.5?(t.glucose=(t.glucose+x.glucose)/2,o=(o+b)/2):2.5<c&&c<17.5?(a.push(g),2.5<c&&c<7.5&&u.push(g)):17.5<c&&c<42.5&&n.push(g)}}var d,i,v=0,h=0,f=0;u.length>0&&(v=u.reduce((function(e,r){return e+r}))/u.length),a.length>0&&(h=a.reduce((function(e,r){return e+r}))/a.length),n.length>0&&(f=n.reduce((function(e,r){return e+r}))/n.length);var p=t.glucose,M=t.glucose,_=0;for(s=1;s<e.length;s++){var x,b=r(x=e[s]);if(Math.round((o-b)/6e4)-_>13)break;if(!(x.glucose>.95*M&&x.glucose<1.05*M))break;M=(p+=x.glucose)/(s+1),_=Math.round((o-b)/6e4)}return i=M,d=_,{delta:Math.round(100*v)/100,glucose:Math.round(100*t.glucose)/100,noise:Math.round(t.noise),short_avgdelta:Math.round(100*h)/100,long_avgdelta:Math.round(100*f)/100,autoISF_average:Math.round(100*i)/100,autoISF_duration:Math.round(100*d)/100,date:o,last_cal:l,device:t.device}}}},r={};var t=function t(o){var u=r[o];if(void 0!==u)return u.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}(6237);freeaps_glucoseGetLast=t})();