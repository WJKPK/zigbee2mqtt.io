"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55435],{33178:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>l,data:()=>a});var i=o(6254);const n={},l=(0,o(58079).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"schneider-electric-meg5113-0300-meg5165-0000",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#schneider-electric-meg5113-0300-meg5165-0000"},[(0,i.Lk)("span",null,"Schneider Electric MEG5113-0300/MEG5165-0000")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"MEG5113-0300/MEG5165-0000")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Schneider Electric")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Merten MEG5165 PlusLink Shutter insert with Merten Wiser System M Push Button (1fold)")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position), lift_duration")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/MEG5113-0300-MEG5165-0000.png",alt:"Schneider Electric MEG5113-0300/MEG5165-0000"})])],-1))])]),t[9]||(t[9]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To get the device into pairing mode, press the up button 3 times briefly and then hold it for a long time (almost 20s). After about 10s the LED starts blinking slowly, continue to hold until it starts blinking rapidly. Now you can release it. Pairing will take a while to complete. The LED will blink and change color during this process.</p><h3 id="control" tabindex="-1"><a class="header-anchor" href="#control"><span>Control</span></a></h3><p>The shutter control uses a simple timer to control the duration to open/close the shutter. The timer duration can be set via &#39;duration&#39;.<br> Be aware, that the controller has no physical position information. Therefore, whenever the shutter is somewhere between fully open and fully closed and you send a command to move to any position other than fully open, the shutter will first move to the fully open position, wait for the timer to elapse and then move to the position you selected.</p><p>Example: You have set a duration of 20s. The shutter is half closed and you send a command to fully close it. It will first fully open (within e.g. 10s) then wait another 10s until the timer has elapsed and then close the shutter completely (taking another 20s).<br> This behavior is designed like this and probably chosen to prevent positioning problems due to motion backlash. It cannot be changed.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',7)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,i.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="lift-duration-numeric" tabindex="-1"><a class="header-anchor" href="#lift-duration-numeric"><span>Lift duration (numeric)</span></a></h3><p>Duration of lift. Value can be found in the published state on the <code>lift_duration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lift_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>300</code>. The unit of this value is <code>s</code>.</p>',6))])}]]),a=JSON.parse('{"path":"/devices/MEG5113-0300_MEG5165-0000.html","title":"Schneider Electric MEG5113-0300/MEG5165-0000 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric MEG5113-0300/MEG5165-0000 control via MQTT","description":"Integrate your Schneider Electric MEG5113-0300/MEG5165-0000 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-09-13T15:34:31.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Control","slug":"control","link":"#control","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Lift duration (numeric)","slug":"lift-duration-numeric","link":"#lift-duration-numeric","children":[]}]}],"git":{"updatedTime":1743148853000},"filePathRelative":"devices/MEG5113-0300_MEG5165-0000.md"}')}}]);