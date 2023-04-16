import{B as t,$ as e}from"./index-179c9324.js";const s=(t,e)=>{if("height"!==e&&"width"!==e)throw new TypeError("Can only check overflow for height or width.");if(!t)throw new TypeError("Can't check overflow on an undefined element.");const s="width"===e?t.clientWidth:t.clientHeight;return("width"===e?t.scrollWidth:t.scrollHeight)>s},i=t=>{const e=Math.random().toString(36).substr(2,9);return document.getElementById(t+e)?i(t):e};customElements.define("web-tabs",class extends t{static get properties(){return{label:{type:String},activeTab:{type:Number,reflect:!0},overflow:{type:Boolean,reflect:!0},limit:{type:Number,reflect:!0}}}constructor(){super(),this.label="",this.activeTab=0,this.overflow=!1,this.prerenderedChildren=null,this.tabs=null,this.idSalt=i("web-tab-"),this.limit=this.children.length,this.onResize=this.onResize.bind(this),this._changeTab=this._changeTab.bind(this),this.focusTab=this.focusTab.bind(this),this.previousTab=this.previousTab.bind(this),this.nextTab=this.nextTab.bind(this),this.firstTab=this.firstTab.bind(this),this.lastTab=this.lastTab.bind(this),this.onClickLoadMore=this.onClickLoadMore.bind(this)}render(){if(!this.prerenderedChildren){this.prerenderedChildren=[],this.tabs=[];let t=1;for(const s of this.children){this.limit&&t===this.limit+1&&(this.tabs.push(this.loadMoreTab()),this.prerenderedChildren.push(e`<div class="web-tabs__panel" role="tabpanel" hidden></div>`)),this.prerenderedChildren.push(this.panelTemplate(t,s));const i=s.getAttribute("data-label");this.tabs.push(this.tabTemplate(t,i)),t++}}return e`
      <div
        class="web-tabs__tablist"
        role="tablist"
        aria-label="${this.label||"tabs"}"
      >
        ${this.tabs}
      </div>
      ${this.prerenderedChildren}
    `}loadMoreTab(){return e`
      <button
        class="web-tabs__tab gc-analytics-event expendableTab"
        @click=${this.onClickLoadMore}
      >
        <span class="web-tabs__text-label">More...</span>
      </button>
    `}onClickLoadMore(t){const e=t.currentTarget;e.parentElement.querySelectorAll(".web-tabs__tab.hidden").forEach((t=>t.classList.remove("hidden"))),e.classList.add("hidden")}tabTemplate(t,s){switch(s){case"question":s="Question "+t;break;case"sample":s="Sample "+t;break;case"":case null:case"bare":s=t}return e`
      <button
        @click=${this.onFocus}
        @focus=${this.onFocus}
        @keydown=${this.onKeydown}
        class="web-tabs__tab
        gc-analytics-event
        ${t>this.limit?"hidden":""}"
        role="tab"
        aria-selected="false"
        id="web-tab-${this.idSalt}-${t}"
        aria-controls="web-tab-${this.idSalt}-${t}-panel"
        tabindex="-1"
        data-category="Site-Wide Custom Events"
        data-label="tab, ${s}"
      >
        <span class="web-tabs__text-label">${s}</span>
      </button>
    `}panelTemplate(t,s){return e`
      <div
        data-index=${t-1}
        id="web-tab-${this.idSalt}-${t}-panel"
        class="web-tabs__panel"
        role="tabpanel"
        aria-labelledby="web-tab-${this.idSalt}-${t}"
        hidden
      >
        ${s}
      </div>
    `}firstUpdated(t){super.firstUpdated(t),this.activeTab=0,this.onResize();const e=this.querySelectorAll("web-question");if(e)for(const t of e)t.addEventListener("request-nav-to-next",this.nextTab)}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.onResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.onResize)}updated(t){t.has("activeTab")&&this._changeTab()}_changeTab(){const t=this.querySelectorAll(".web-tabs__tab"),e=this.querySelectorAll(".web-tabs__panel"),s=t[this.activeTab],i=e[this.activeTab];if(s){for(const e of t)e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1");s.setAttribute("aria-selected","true"),s.removeAttribute("tabindex")}if(i){for(const t of e)t.hidden=!0;i.hidden=!1}}onResize(){const t=this.querySelector(".web-tabs__tablist");this.overflow=s(t,"width")}onFocus(t){const e=t.currentTarget,s=this.querySelectorAll(".web-tabs__tab"),i=Array.from(s).indexOf(e);e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"}),this.activeTab=i}onKeydown(t){const e=this.querySelectorAll(".web-tabs__tab"),s=35,i=36,a=37,n=39;switch(t.keyCode){case n:t.preventDefault(),this.nextTab();break;case a:t.preventDefault(),this.previousTab();break;case i:t.preventDefault(),this.firstTab();break;case s:t.preventDefault(),this.lastTab()}e[this.activeTab].focus()}focusTab(t){const e=this.querySelectorAll(".web-tabs__tab");e[t]&&e[t].focus()}previousTab(){const t=this.querySelectorAll(".web-tabs__tab");t[this.activeTab-1]?this.activeTab=this.activeTab-1:this.activeTab=t.length-1}nextTab(){const t=this.querySelectorAll(".web-tabs__tab");this.activeTab=(this.activeTab+1)%t.length||0}firstTab(){this.activeTab=0}lastTab(){const t=this.querySelectorAll(".web-tabs__tab");this.activeTab=t.length-1}indexOfTabByChild(t){const e=t.closest('[class="web-tabs__panel"]');if(!this.contains(e))return-1;const s=parseInt(e.getAttribute("data-index"));return isNaN(s)?-1:s}});customElements.define("web-copy-code",class extends t{constructor(){super(),this.onCopy=this.onCopy.bind(this)}connectedCallback(){super.connectedCallback(),this.copyButton||(this.copyButton=document.createElement("button"),this.copyButton.className="button button__round web-copy-code__button",this.copyButton.setAttribute("aria-label","Copy code"),this.copyButton.addEventListener("click",this.onCopy),this.tooltip=document.createElement("span"),this.tooltip.className="tooltip",this.tooltip.setAttribute("role","tooltip"),this.tooltip.setAttribute("data-alignment","left"),this.tooltipContent=document.createElement("span"),this.tooltipContent.className="tooltip__content",this.tooltipContent.textContent="Copy code",this.tooltip.append(this.tooltipContent),this.copyButton.append(this.tooltip),this.prepend(this.copyButton))}onCopy(){window.getSelection().removeAllRanges();const t=document.createRange();t.selectNode(this.querySelector("code")),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges()}});export{s as c,i as g};
