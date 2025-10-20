import{C as $e,a as B,j as Ae}from"./index-CMF_CePX.js";import{P as Ne,s as He,E as Ue,m as Fe}from"./Header-ZV7lvmHH.js";import{w as Se,o as se,d as Ce,g as y,h as Le,M as ie,c as Re,f as ee,y as Oe,z as Be,A as je,B as ke,D as ne,E as de,F as Ve,G as ze,s as Ge,H as Ee}from"./util-BCUUeTU2.js";const le=$e("challenge",()=>{const t=B([]),e=B(),s=B(!1);function i(){e.value=void 0,s.value=!1}function l(){t.value=[],e.value=void 0,s.value=!1}return{challengeArray:t,challengeUpload:e,challengeMenuOpen:s,closeChallengeMenu:i,$reset:l}});let pe,j,V,me,he,z,C,G,ge,fe,L=[],Y;console.log("loaded submissions");async function ft(){if(pe=new URL(location.href),j=pe.searchParams.get("pid")||"",V=document.querySelector(".c-title"),me=document.querySelector(".c-details"),he=document.querySelector(".c-back"),z=document.querySelector(".c-sort-div"),C=document.querySelector(".s-container"),G=document.querySelectorAll('input[type="checkbox"]'),fe=document.querySelector(".clear-sub-filters"),!!await Se()&&(Y=await lt(H,1),V.style.opacity="1",V.textContent=`${Y.name} Challenge`,me.addEventListener("click",async()=>{await Ie(Y)}),he.addEventListener("click",()=>{Ae.push({name:"practice"})}),z.addEventListener("mousedown",()=>{se(z,()=>["Number of Lines","Number of Characters","Time Taken","Most Recent","Oldest First"],t=>{t==0&&S("lines",!0),t==1&&S("chars",!0),t==2&&S("time",!0),t==3&&S("recent",!0),t==4&&S("recent",!1),Ce()},{getIcons(){return["keyboard_double_arrow_down","keyboard_double_arrow_down","keyboard_double_arrow_down","keyboard_double_arrow_down","keyboard_double_arrow_down"]},openToLeft:!0})}),G.forEach(t=>{t.addEventListener("change",e=>{const s=e.target.value,i=e.target.checked,l=e.target.name;i?k[l]=s:delete k[l],Z()})}),fe.addEventListener("click",()=>{G.forEach(t=>{t.checked==!0&&t.click()}),Z()}),await Z(),j&&L.length)){let t=L.find(e=>e.pid==j);if(!t)return;console.log("Creating popup with "+t.name+"'s Submission details"),qe(t)}}async function _e(t,e){L=t,Je();for(const s of t){let i=Pe(s);C.appendChild(i)}t.length||(C.innerHTML+="<i>There are currently no submissions to this challenge. Upload one to be featured here!</i>",C.classList.add("empty")),ge=document.querySelectorAll(".s-open-preview"),Ye(ge),await Le()}function Ye(t){for(let e=0;e<t.length;e++)t[e].addEventListener("click",()=>{let s=t[e].getAttribute("pid"),i=L.find(l=>l.pid==s);console.log("ADD CLICK LISTENERS:",L,s,i),qe(i)})}async function Ze(t,e){return new Promise(s=>{y.emit("getSubmission",t,e,i=>{s(i)})})}async function De(t,e,s,i,l=20,n=0){return new Promise(a=>{y.emit("getSubmissions",t,l,n,e,s,i,o=>{(typeof o=="number"||o==null)&&(alert(`Error ${o} while trying to get Submissions`),a([])),console.log("the data...",o),a(o)})})}async function S(t,e){let s=await De(H,{mine:k.madebyuser!=null},t,e);_e(s)}const k={};async function Z(){let t=await De(H,{mine:k.madebyuser!=null},"recent",!1);console.log("filter",t,{mine:k.madebyuser!=null}),await _e(t)}function Je(){C.innerHTML=""}const Ke=le();let D,Qe=new URL(location.href),H=Qe.searchParams.get("cid")||"";class We extends ie{constructor(e,s){super("Submission Menu"),this.data=e,console.log("loaded data",e),this.submission=s}data;submission;async load2(){if(await _(),Ke.challengeArray.find(e=>e.cID==H).submitted){let e=this.data.p;await Re();let s=this.menu.querySelector(".submission-editor > .editor-cont"),i=new Ne("__tmp",s,{readonly:!0});He(i.parent,Ue.none,!0),i.init(!0);async function l(c,v){Fe(c);let m=[];for(const h of c)if(h.items==null){let g=await i.createFile(h.name,h.buf,null,v);m.push(g)}else if(h.items!=null){let g=i.createFolder(h.name,v,!1);m.push(g),g.items=await l(h.items,g)}return m}await l(e.items,null);let n=s.getBoundingClientRect().height;s.parentElement.style.height=n+"px";let a=s.parentElement.querySelector(".b-fullscreen");a.onclick=async function(){a.blur(),document.fullscreenElement?await document.exitFullscreen():(await s.parentElement.requestFullscreen(),a.children[0].textContent="collapse_content",await ee(100),i.getCurEditor()?.layout())},s.parentElement.onfullscreenchange=async function(c){document.fullscreenElement||(a.children[0].textContent="open_in_full",await ee(100),i.getCurEditor()?.layout())};let o=i.files.find(c=>c.name=="index.html");o?o.open():i.files[0]?.open()}else document.querySelector(".submission-editor").innerHTML="<i>In order to view the code, please upload your own submission first!</i>",document.querySelector(".submission-editor").classList.add("empty")}load(){let e=this.data.p,s=Oe(Be(this.submission.uid,this.submission.pid));super.load(),this.menu.classList.add("fullpage"),this.menu.innerHTML=`
        <div class="s-popup">
          <div class="s-popup-header">
            <h1 class="s-popup-title">${this.submission.name}'s Submission</h1>
            <span class="s-popup-close material-symbols-outlined">close</span>
          </div>
          <div class="s-popup-body">
            <div class="s-popup-code">
              <!--<h2 class="s-popup-code-title">Code</h2>-->
              <div class="submission-editor">
                <div class="pane-files pane">${je()}</div>
                <div class="editor-cont pane"></div>
              </div>
              <div class="s-popup-code-contents">${e.name}<br><br>${e.desc}<!--I'm starting to wonder how far I'm willing to take these class names, it's getting bad...--></div>
            </div>
            <div class="s-popup-preview">
              <div class="s-popup-preview-header">
                <h2 class="s-popup-preview-title">Preview</h2>
                <div class="s-preview-title-nested">
                  <button class="b-refresh s-b-refresh icon-btn">
                    <div class="icon-refresh material-symbols-outlined">sync</div>
                    <div class="label">Refresh</div>
                  </button>
                  <div style="margin-left:auto;gap:10px" class="flx-h flx-al">
                    <div class="material-symbols-outlined b-open-in-new co-item" co-label="Open in new tab">open_in_new</div>
                  </div>
                </div>
              </div>
              <div class="s-popup-preview-iframe-cont">
                <iframe src="${s}" class="s-popup-iframe" sandbox="allow-scripts allow-forms"></iframe>
              </div>
              <div class="s-popup-preview-details">
                <h3 class="s-popup-preview-details-title">Details</h3>
                <div class="s-popup-preview-details-contents">
                  <div class="s-popup-preview-details-item">
                    <h4 class="s-popup-preview-details-item-title">Line Count</h4>
                    <div class="s-popup-preview-details-item-contents">${this.submission.lineCount}</div>
                  </div>
                  <div class="s-popup-preview-details-item">
                    <h4 class="s-popup-preview-details-item-title">Char. Count</h4>
                    <div class="s-popup-preview-details-item-contents">${this.submission.characterCount}</div>
                  </div>
                  <div class="s-popup-preview-details-item">
                    <h4 class="s-popup-preview-details-item-title">Language(s)</h4>
                    <div class="s-popup-preview-details-item-contents">${this.submission.lang?this.submission.lang.join(", ").toUpperCase():"None"}<!--JavaScript--></div>
                  </div>
                  <div class="s-popup-preview-details-item">
                    <h4 class="s-popup-preview-details-item-title">Date Submitted</h4>
                    <div class="s-popup-preview-details-item-contents">${new Date(this.submission.dateSubmitted).toLocaleDateString()}</div>
                  </div>
                  <div class="s-popup-preview-details-item">
                    <h4 class="s-popup-preview-details-item-title">Time Taken</h4>
                    <div class="s-popup-preview-details-item-contents">${ke(this.submission.time)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,this.load2();let i=this.menu.querySelector(".s-b-refresh"),l=this.menu.querySelector(".b-open-in-new"),n=this.menu.querySelector(".icon-refresh"),a=this.menu.querySelector(".s-popup-iframe");i.addEventListener("click",c=>{a.src=s,n.style.rotate=de?"360deg":"0deg",Ve(!de)}),l.addEventListener("click",c=>{open(a.src,"_blank")});let o=document.querySelector(".s-popup-close");return o.onclick=()=>{this.close()},this._postLoad(),this}}function Pe(t,e){let s=document.createElement("div");s.className="s-card";let i=document.createElement("span");i.className="s-name",i.textContent=t.name,s.appendChild(i);let l=document.createElement("div");l.className="s-card-right",s.appendChild(l);let n=t.lang,a=document.createElement("div");a.className="s-languages",l.appendChild(a),n.forEach(ue=>{let O=document.createElement("span");O.textContent=ue,O.className=`s-lang-${ue}`,a.appendChild(O)});let o=document.createElement("span");o.className="s-char-count";let c=document.createElement("span");c.className="material-symbols-outlined char-count-symbol",c.textContent="tag";let v=document.createElement("span");v.textContent=t.characterCount.toLocaleString()||"0",console.log(t),o.appendChild(c),o.appendChild(v),l.appendChild(o);let m=document.createElement("span");m.className="s-time-taken";let h=document.createElement("span");h.className="material-symbols-outlined date-symbol",h.textContent="schedule";let g=document.createElement("span");g.textContent=ke(t.time),m.appendChild(h),m.appendChild(g),l.appendChild(m);let w=document.createElement("button");return w.className="s-open-preview c-pointer",w.textContent="Open",w.setAttribute("pid",t.pid),l.appendChild(w),w.addEventListener("click",()=>{ne(e,t.pid)}),s}async function qe(t){console.log("Creating Submission Menu"),D&&(D.close(),console.log("already a menu"));let e=await Ze(t.uid,t.pid);D=new We(e,t),D.load()}const E=le(),u={};let Te="popularity",xe=!0;function Xe(t){Te=t}function et(t){xe=t}function tt(){setTimeout(()=>{Me=document.querySelector("#search")},100)}async function st(t){let e=await new Promise(s=>{y.emit("getChallenges",t?.length?t:void 0,20,0,u,Te,xe,i=>{s(i)})});return typeof e=="object"?(e=e.map(s=>U.from(s)),e=e.sort((s,i)=>{let l=s.contest?1:0;return(i.contest?1:0)-l}),e):[]}class U{constructor(e,s,i,l,n,a,o,c,v,m){(!n||n=="")&&(n="/images/fillerthumbnail.png"),this.name=s,this.desc=i,this.inProgress=l,this.imgURL=n,this.pid=a,this.submitted=o,this.cID=e,this.difficulty=c,this.ongoing=v,this.submission_count=m,this.sub_highlights=[]}name;desc;inProgress;imgURL;pid;submitted;cID;difficulty;ongoing;submission_count;timespan;sub_highlights;contest;static from(e){let s=new U(e.id,e.name,e.desc,!1,e.imgUrl,null,!1,e.difficulty,e.ongoing,e.submission_count);return s.timespan=e.timespan,s.sub_highlights=e.hl,s.inProgress=e.inProgress,s.submitted=e.completed,s.contest=e.contest,s}}let P;async function Ie(t){P&&P.close(),P=new it(t),P.load()}class it extends ie{constructor(e){super("Challenge Menu"),this.c=e}c;load(){super.load();let e=nt(this.c.desc);this.menu.innerHTML=`
              <div class="c-popup">
                  <div class ="c-popup-left">
                      <div class="c-popup-header">
                          <h2 class="c-popup-title">${this.c.name}</h2>
                          <i class="c-attempted"> ${this.c.submitted?"Attempted":"Not Attempted"}</i>
                      </div>
                      <div class="c-popup-body resize" resize="r">
                          <div class ="c-popup-task">
                            <h3 class="c-popup-sub-title">Task</h3>
                            ${e.innerHTML||'<span class="popup-class-text"> There is currently no description for this challenge. Please check back later!'}
                          </div>
                          <div class ="c-popup-implementations">
                              <div class="c-popup-implementations-header">
                                  <h3 class="c-popup-sub-title">Submissions</h3>
                                  <button class="c-view-all">
                                      View All (${this.c.submission_count})
                                  </button>
                              </div>
                              <div class="c-implementations">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="c-popup-right">
                      <div class="c-popup-close material-symbols-outlined">
                          close
                      </div>
                      <div class="c-popup-img-div">
                        <div class="c-popup-img-cont">
                            <img class="c-popup-img" src="${this.c.imgURL}" alt="challenge image">
                        </div>
                          <i class="c-popup-img-text">Sketch Mockup</i>
                      </div>
                      <div class="c-popup-bottom-right">
                        <div class="c-difficulty">
                            <span class="c-difficulty-text">Difficulty:</span><span class="c-difficulty-number">${this.c.difficulty}</span>
                        </div>
                        <div class="two-col" style="grid-template-columns:1fr">
                            ${this.c.inProgress?"":'<button style="width:100%" class="c-upload"><h3>Upload</h3><span class="material-symbols-outlined c-start-arrow">upload<span/></button>'}
                            <button style="width:100%" class="c-start"><h3>${this.c.inProgress?"Continue":"Start"}</h3><span class="material-symbols-outlined c-start-arrow">arrow_forward_ios<span/></button>
                        </div>
                      </div>
                  </div>
              </div>
        `;let s=this.menu.querySelector(".c-view-all"),i=this.menu.querySelector(".c-popup-img-cont"),l=this.menu.querySelector(".c-start"),n=this.menu.querySelector(".c-upload");if(s.addEventListener("click",o=>{ne(this.c.cID,"")}),i.addEventListener("click",o=>{ze(this.c.imgURL)}),l?.addEventListener("click",o=>{this.c.inProgress?rt(this.c.cID):ct(this.c.cID)}),n?.addEventListener("click",o=>{E.challengeUpload={cid:this.c.cID,files:[],progress:0,status:"none",step:0},E.challengeMenuOpen=!0}),this.c.sub_highlights.length)for(let o=0;o<this.c.sub_highlights.length;o++){let c=Pe(this.c.sub_highlights[o],this.c.cID);document.querySelector(".c-implementations").appendChild(c)}else document.querySelector(".c-implementations").innerHTML="<i>There are currently no submissions to this challenge. Upload one to be featured here!</i>",document.querySelector(".c-implementations").classList.add("empty"),document.querySelector(".c-view-all").classList.add("empty"),console.log("No submissions found for this challenge.");document.querySelector(".c-popup-left");let a=document.querySelector(".c-popup-close");return a.onclick=()=>{this.close()},this._postLoad(),this}}function nt(t){let e=document.createElement("span");e.className="popup-class-text";let s=t.split(`
`);for(let i=0;i<s.length;i++){let l=document.createElement("span");l.textContent=s[i],e.append(l)}return e}async function lt(t,e=0){return new Promise(s=>{y.emit("getChallenge",t,e,i=>{s(U.from(i))})})}let Me;async function _(){if(E.challengeArray=await st(Me?.value),E.challengeArray==null){alert("Failed to fetch challenges. Please try again later.");return}}class ot extends ie{constructor(e){super("Delete Progress","delete"),this.cID=e}cID;load(e){super.load();let s=E.challengeArray.find(i=>i.cID==this.cID).name;return this.body.innerHTML=`
              <div class="c-confirm-div">
                  <span class="c-confirm-text">Are you sure you want to delete your progress on the <strong>${s}</strong> Challenge? You won't be able to get it back...</span>
                  <div class="c-confirm-options">
                      <button class="c-confirm-btn">
                          Yes
                      </button>
                      <button class="c-cancel-btn">
                          No (Cancel)
                      </button>
                  </div>
              </div>
          `,this.body.querySelector(".c-cancel-btn").addEventListener("click",()=>{ye(),this.close()}),this.body.querySelector(".c-confirm-btn").addEventListener("click",()=>{we(this.cID),this.close()}),this}confirmChoice(){we(this.cID),this.close()}onClose(){ye()}}const f=le();let p,d,b,oe,ae,ce,ve,J,be,r,K;const M="BCC-01";let Q,q,W,T=[],$=0,A=0,N;console.log("loaded practice");async function vt(){if(p=document.querySelector(".c-in-progress-container"),d=document.querySelector(".c-outer-in-progress"),b=document.querySelector(".c-browse-container"),oe=document.querySelector(".c-ip-container-header"),ae=document.querySelector(".c-in-progress-counter"),ce=document.querySelector(".c-browse-counter"),document.querySelector(".c-browse-container-header"),document.querySelector(".c-home"),ve=document.querySelector(".clear-filters"),J=document.querySelector(".c-sort-div"),be=document.querySelector("form.c-search"),K=document.querySelectorAll('input[type="checkbox"]'),Q=new URL(location.href),q=Q.searchParams.get("cid")||"",W=Q.searchParams.get("filteroptions"),W&&(T=W.split(",")||[]),ve?.addEventListener("click",()=>{Object.keys(u).forEach(e=>{delete u[e]}),K.forEach(e=>{e.checked=!1}),x()}),K.forEach(e=>{e.addEventListener("change",s=>{d.classList.contains("collapse")&&F(r,!0);const i=s.target.value,l=s.target.checked,n=s.target.name;if(l)u[n]||(u[n]=[]),u[n].push(i);else{const a=u[n].indexOf(i);a>-1&&u[n].splice(a,1),u[n].length===0&&delete u[n]}x()})}),!await Se()){console.warn("not logged in, aborting load");return}if(T.length>0){let e;console.log(T);for(let s of T)e=document.querySelector(`input#${s}`),console.log(e),e&&(e.checked=!0,u[e.name]=[e.value])}await _(),await R(f.challengeArray,!0);let t=localStorage.getItem(`${M}toggleState`)||"open";if(N=f.challengeArray.length==0?!0:t=="open",d.classList.add("window-load"),N==!1&&r?(d.classList.add("collapse"),d.style.overflow="hidden",p.style.overflow="hidden",r.classList.remove("point-up"),r.classList.add("point-down")):(d.style.overflow="visible",p.style.overflow="visible"),q&&q!='""'){await te(q);let e=new URL(location.href);e.searchParams.delete("cid"),window.history.replaceState({},document.title,e.toString())}J.addEventListener("mousedown",()=>{se(J,()=>["Popularity","Popularity","Alphabetical (A-Z)","Alphabetical (Z-A)"],e=>{e==0&&I("popularity",!0),e==1&&I("popularity",!1),e==2&&I("alphabetical",!0),e==3&&I("alphabetical",!1),Ce()},{getIcons(){return["keyboard_double_arrow_down","keyboard_double_arrow_up","keyboard_double_arrow_down","keyboard_double_arrow_up"]},openToLeft:!0})}),be.addEventListener("submit",e=>{e.preventDefault(),x()}),tt(),x()}async function F(t,e){d.classList.remove("window-load"),t&&(e==!0?(localStorage.setItem(`${M}toggleState`,"open"),N=!0,t.classList.remove("point-down"),t.classList.add("point-up"),d.classList.remove("collapse"),await ee(200),p.style.overflow="visible",d.style.overflow="visible"):e==!1&&(localStorage.setItem(`${M}toggleState`,"closed"),N=!1,t.classList.remove("point-up"),t.classList.add("point-down"),d.classList.add("collapse"),d.style.overflow="hidden",p.style.overflow="hidden"))}function at(t){t&&(t.onclick=function(){F(t,localStorage.getItem(`${M}toggleState`)!="open")})}async function ct(t,e=!0){return new Promise(s=>{y.emit("startChallenge",t,i=>{if(typeof i=="number"){alert("Error while trying to start challenge, error code:"+i),s(void 0);return}e&&Ee(i),s(i)})})}async function rt(t){let e=await new Promise(s=>{y.emit("continueChallenge",t,i=>{s(i)})});e!=null&&Ee(e)}async function R(t,e){e&&await Ge([b,p],400);for(let s of t)dt(s);await Le(),t.length==0&&F(r,!0),A<=0?(p.classList.add("empty"),p.innerHTML="<i>Start working on a challenge, and it'll show up here!</i>",r&&r.remove()):(p.classList.remove("empty"),oe.contains(r)||ut()),$==0?(b.classList.add("empty"),b.innerHTML="<i>No challenges match your search. Try another filter option!</i>"):b.classList.remove("empty"),ae.innerHTML=`(${A})`,ce.innerHTML=`(${$})`,at(r)}function ut(){r=document.createElement("span"),r.classList.add("material-symbols-outlined","c-toggle"),r.innerHTML="expand_less",oe.append(r)}function dt(t){let e=document.createElement("div");if(e.classList.add("c-card"),e.setAttribute("cID",t.cID),t.inProgress?(p.appendChild(e),A++):(b.appendChild(e),$++),e.innerHTML=`
				<div class="c-img-div">
						<img class="c-img" src="${t.imgURL}" alt="challenge image">
				</div>
				<div class="flx-sb flx-al c-name-cont">
					<h3 class="c-name">
							${t.name}
					</h3>
					<span class="c-diff" d="${t.difficulty}">${t.difficulty}</span>
				</div>
				<span class="c-text">
				${t.desc.length>115?t.desc.slice(0,115)+"...":t.desc}
				</span>
				<div class="c-button-options">
						<button class="c-preview">
								View <span class="material-symbols-outlined">info</span>
						</button>
						<button class="c-submissions">
								<span>Submissions</span>
						</button>
				</div>
		`,e.querySelector(".c-img-div")?.addEventListener("click",n=>{te(t.cID)}),e.querySelector(".c-preview")?.addEventListener("click",n=>{te(t.cID)}),e.querySelector(".c-submissions")?.addEventListener("click",n=>{ne(t.cID,"")}),t.inProgress){let n=document.createElement("span");n.className="c-details material-symbols-outlined",n.innerHTML="more_horiz",n.addEventListener("mousedown",a=>{se(n,()=>["Delete Progress"],o=>{o==0&&pt(t.cID)},{getIcons(){return["delete"]},openToLeft:!0})}),e.appendChild(n)}if(t.submitted){let n=document.createElement("span");n.className="c-submitted",n.innerHTML='<span class="material-symbols-outlined">select_check_box</span>Submitted',e.appendChild(n)}return e}let X;function pt(t){X&&X.close(),X=new ot(t).load()}function ye(){document.querySelector(".c-delete-div")&&document.querySelector(".c-delete-div").remove(),document.querySelector(".c-confirm-div")&&document.querySelector(".c-confirm-div").remove()}async function we(t){console.log("Deleting progress on challenge: "+t);let e=await new Promise(s=>{y.emit("deleteChallengeProgress",t,i=>{s(i)})});console.log("delete progress res: ",e),e!=0?alert("Failed to delete challenge progress, error code: "+e):(await _(),re(),R(f.challengeArray))}async function te(t){console.log("::::: CHALLENGE",f.challengeArray.find(e=>e.cID==t)),await Ie(f.challengeArray.find(e=>e.cID==t))}async function x(){await _(),re(),R(f.challengeArray)}function re(){b.innerHTML="",p.innerHTML="",$=0,A=0,ae.innerHTML="",ce.innerHTML=""}async function I(t,e){re(),Xe(t),et(e),await _(),R(f.challengeArray),f.challengeArray.filter(s=>s.inProgress).length==1&&F(r,!1)}export{ft as a,we as d,vt as i,ct as s,le as u};
