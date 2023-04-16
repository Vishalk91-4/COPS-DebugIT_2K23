import"./index-7e4cf5aa.js";import"./index-8d2890d5.js";import{B as t,S as e,$ as s,o as i}from"./index-179c9324.js";import"./actions-492ab2fa.js";customElements.define("web-audio-fab",class extends t{static get properties(){return{playing:{type:Boolean,reflect:!0},showing:{type:Boolean,reflect:!0},target:{type:String}}}constructor(){super(),this._player=null,this._observer=null,this.target=null,this.inert=!0,this.onToggle=this.onToggle.bind(this),this.onScrollUp=this.onScrollUp.bind(this),this.onIntersect=this.onIntersect.bind(this)}firstUpdated(){this._player=document.getElementById(this.target),this._player&&(this._player.addEventListener("play",this.onToggle),this._player.addEventListener("pause",this.onToggle),this.addEventListener("click",this.onScrollUp),this._observer=new IntersectionObserver(this.onIntersect,{threshold:1}),this._observer.observe(this._player))}onToggle(){this.playing=!this._player.paused}onScrollUp(){document.documentElement.scrollTo({top:0,behavior:"smooth"})}onIntersect(t){t.forEach((t=>{this.showing=!t.isIntersecting,this.inert=!this.showing}))}});customElements.define("web-course-search-results",class extends e{render(){return this.showHits?this.hits_.length?s`
      <div class="web-course-search web-search-popout">
        <ul id="${this.id}-list" class="stack-nav" role="listbox">
          ${this.itemsTemplate}
        </ul>
      </div>
    `:this.query?s`
        <div class="web-course-search web-course-search__no-results web-search-popout">
          <svg width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="96" fill="#F8F9FA"/>
            <path fill="#F1F3F4" stroke="#fff" d="M84.5 40.5h59v79h-59z"/>
            <path fill="#F1F3F4" stroke="#fff" d="M52.5 72.5h59v79h-59z"/>
            <path fill="#fff" stroke="#212121" d="M68.5 56.5h59v79h-59z"/>
            <path stroke="#212121" d="M78 69.5h20M78 81.5h40M78 93.5h40M78 105.5h40M78 117.5h20M106 118l26 26"/>
            <path d="M131.198 143.198a2.383 2.383 0 013.371 0l12.233 12.233a2.383 2.383 0 11-3.371 3.371l-12.233-12.233a2.383 2.383 0 010-3.371z" fill="#fff" stroke="#212121"/>
            <circle cx="106" cy="118" r="32" fill="#fff"/>
            <mask id="a" maskUnits="userSpaceOnUse" x="76" y="88" width="60" height="60">
              <circle cx="106" cy="118" r="29.5" fill="#fff" stroke="#212121"/>
            </mask>
            <g mask="url(#a)" stroke="#212121" stroke-width="3">
              <path d="M76 95.5h42M76 108.5h42M76 121.5h25"/>
            </g>
            <circle cx="106" cy="118" r="29.5" fill="#fff" fill-opacity=".88" stroke="#212121"/>
            <path d="M96 116l-3 3-3 3m0-6l6 6M92 136s3.2-4 8-4 8 4 8 4M110 116l-3 3-3 3m0-6l6 6" stroke="#FF1776"/>
          </svg>
          <p>
            No results
          </p>
        </div>
      `:"":s`<div role="listbox" aria-hidden="true"></div>`}get itemsTemplate(){return this.hits_.map(((t,e)=>{if(!t._highlightResult.title||!t._highlightResult.title.value)return s``;const l=this.formatAlgoliaValue(t._highlightResult.title.value),r=this.formatAlgoliaValue(t._snippetResult.content.value);return s`
        <li>
          <a
            id="${this.id}-link-${e}"
            aria-selected="${e===this.cursor}"
            tabindex="-1"
            href="${t.url}"
          >
            <div class="flow flow-space-size-0">
              <h3 class="text-size-1">${i(l)}</h3>
              <p class="text-size-0 color-mid-text">${i(r)}</p>
            </div>
          </a>
        </li>
      `}))}});
