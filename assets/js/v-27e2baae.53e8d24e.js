"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24214],{374176:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-27e2baae","path":"/devices/ATMS1601Z.html","title":"TuYa ATMS1601Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa ATMS1601Z control via MQTT","description":"Integrate your TuYa ATMS1601Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-06-01T15:08:55.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power outage memory (enum)","slug":"power-outage-memory-enum","link":"#power-outage-memory-enum","children":[]},{"level":3,"title":"Indicator mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1700986732000},"filePathRelative":"devices/ATMS1601Z.md"}')},306551:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var i=o(166252);const a=(0,i._)("h1",{id:"tuya-atms1601z",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#tuya-atms1601z","aria-hidden":"true"},"#"),(0,i.Uk)(" TuYa ATMS1601Z")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),n=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"ATMS1601Z")],-1),l=(0,i._)("td",null,"Vendor",-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Din smart relay (without power monitoring)")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), power_outage_memory, indicator_mode, linkquality")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ATMS1601Z.jpg",alt:"TuYa ATMS1601Z"})])],-1),r=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),h=(0,i.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-outage-memory-enum" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-enum" aria-hidden="true">#</a> Power outage memory (enum)</h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum" aria-hidden="true">#</a> Indicator mode (enum)</h3><p>Relay LED indicator mode. Value can be found in the published state on the <code>indicator_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on_off</code>, <code>off_on</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),p={},m=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[d,(0,i._)("tbody",null,[n,(0,i._)("tr",null,[l,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,i.w5)((()=>[(0,i.Uk)("TuYa")])),_:1})])]),u,c,s])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),h])}]])}}]);