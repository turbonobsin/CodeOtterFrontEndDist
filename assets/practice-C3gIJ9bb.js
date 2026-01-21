import{q as Ie,k as B,J as Me}from"./vue-q1_PGPlY.js";import{P as Ne,s as He,E as Ue,m as Fe}from"./Header-DlwAki33.js";import{w as Se,o as se,e as Ce,i as y,h as Le,M as ie,c as Re,g as ee,y as Oe,z as Be,A as Ve,B as De,D as ne,E as de,F as je,G as ze,s as Ge,H as Ee}from"./util-Dz5jBCXf.js";import{r as Ye}from"./index-Davjo1HD.js";const le=Ie("challenge",()=>{const t=B([]),e=B(),s=B(!1);function i(){e.value=void 0,s.value=!1}function l(){t.value=[],e.value=void 0,s.value=!1}return{challengeArray:t,challengeUpload:e,challengeMenuOpen:s,closeChallengeMenu:i,$reset:l}});let pe,V,j,me,he,z,L,G,fe,ge,D=[],Y;console.log("loaded submissions");async function bt(){if(pe=new URL(location.href),V=pe.searchParams.get("pid")||"",j=document.querySelector(".c-title"),me=document.querySelector(".c-details"),he=document.querySelector(".c-back"),z=document.querySelector(".c-sort-div"),L=document.querySelector(".s-container"),G=document.querySelectorAll('input[type="checkbox"]'),ge=document.querySelector(".clear-sub-filters"),!!await Se()&&(Y=await ot(H,1),j.style.opacity="1",j.textContent=`${Y.name} Challenge`,me.addEventListener("click",async()=>{await $e(Y)}),he.addEventListener("click",()=>{Ye.push({name:"practice"})}),z.addEventListener("mousedown",()=>{se(z,()=>["Number of Lines","Number of Characters","Time Taken","Most Recent","Oldest First"],t=>{t==0&&C("lines",!0),t==1&&C("chars",!0),t==2&&C("time",!0),t==3&&C("recent",!0),t==4&&C("recent",!1),Ce()},{getIcons(){return["keyboard_double_arrow_down","keyboard_double_arrow_down","keyboard_double_arrow_down","keyboard_double_arrow_down","keyboard_double_arrow_down"]},openToLeft:!0})}),G.forEach(t=>{t.addEventListener("change",e=>{const s=e.target.value,i=e.target.checked,l=e.target.name;i?E[l]=s:delete E[l],J()})}),ge.addEventListener("click",()=>{G.forEach(t=>{t.checked==!0&&t.click()}),J()}),await J(),V&&D.length)){let t=D.find(e=>e.pid==V);if(!t)return;console.log("Creating popup with "+t.name+"'s Submission details"),Te(t)}}async function ke(t,e){D=t,Ke();for(const s of t){let i=Pe(s);L.appendChild(i)}t.length||(L.innerHTML+="<i>There are currently no submissions to this challenge. Upload one to be featured here!</i>",L.classList.add("empty")),fe=document.querySelectorAll(".s-open-preview"),Je(fe),await Le()}function Je(t){for(let e=0;e<t.length;e++)t[e].addEventListener("click",()=>{let s=t[e].getAttribute("pid"),i=D.find(l=>l.pid==s);console.log("ADD CLICK LISTENERS:",D,s,i),Te(i)})}async function Ze(t,e){return new Promise(s=>{y.emit("getSubmission",t,e,i=>{s(i)})})}async function _e(t,e,s,i,l=20,n=0){return new Promise(o=>{y.emit("getSubmissions",t,l,n,e,s,i,a=>{(typeof a=="number"||a==null)&&(alert(`Error ${a} while trying to get Submissions`),o([])),console.log("the data...",a),o(a)})})}async function C(t,e){let s=await _e(H,{mine:E.madebyuser!=null},t,e);ke(s)}const E={};async function J(){let t=await _e(H,{mine:E.madebyuser!=null},"recent",!1);console.log("filter",t,{mine:E.madebyuser!=null}),await ke(t)}function Ke(){L.innerHTML=""}const Qe=le();let _,We=new URL(location.href),H=We.searchParams.get("cid")||"";class Xe extends ie{constructor(e,s){super("Submission Menu"),this.data=e,console.log("loaded data",e),this.submission=s}data;submission;async load2(){if(await k(),Qe.challengeArray.find(e=>e.cID==H).submitted){let e=this.data.p;await Re();let s=this.menu.querySelector(".submission-editor > .editor-cont"),i=new Ne("__tmp",s,{readonly:!0});He(i.parent,Ue.none,!0),i.init(!0);async function l(r,f){Fe(r);let c=[];for(const d of r)if(d.items==null){let g=await i.createFile(d.name,d.buf,null,f);c.push(g)}else if(d.items!=null){let g=i.createFolder(d.name,f,!1);c.push(g),g.items=await l(d.items,g)}return c}await l(e.items,null);let n=s.getBoundingClientRect().height;s.parentElement.style.height=n+"px";let o=s.parentElement.querySelector(".b-fullscreen");o.onclick=async function(){o.blur(),document.fullscreenElement?await document.exitFullscreen():(await s.parentElement.requestFullscreen(),o.children[0].textContent="collapse_content",await ee(100),i.getCurEditor()?.layout())},s.parentElement.onfullscreenchange=async function(r){document.fullscreenElement||(o.children[0].textContent="open_in_full",await ee(100),i.getCurEditor()?.layout())};let a=i.files.find(r=>r.name=="index.html");a?a.open():i.files[0]?.open()}else document.querySelector(".submission-editor").innerHTML="<i>In order to view the code, please upload your own submission first!</i>",document.querySelector(".submission-editor").classList.add("empty")}load(){let e=this.data.p,s=Oe(Be(this.submission.uid,this.submission.pid));super.load(),this.menu.classList.add("fullpage"),this.menu.innerHTML=`
        <div class="s-popup">
          <div class="s-popup-header">
            <h1 class="s-popup-title">${this.submission.name}'s Submission</h1>
            <span class="s-popup-close material-symbols-outlined">close</span>
          </div>
          <div class="s-popup-body">
            <div class="s-popup-code">
              <!--<h2 class="s-popup-code-title">Code</h2>-->
              <div class="submission-editor">
                <div class="pane-files pane">${Ve()}</div>
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
                    <div class="s-popup-preview-details-item-contents">${De(this.submission.time)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,this.load2();let i=this.menu.querySelector(".s-b-refresh"),l=this.menu.querySelector(".b-open-in-new"),n=this.menu.querySelector(".icon-refresh"),o=this.menu.querySelector(".s-popup-iframe");i.addEventListener("click",r=>{o.src=s,n.style.rotate=de?"360deg":"0deg",je(!de)}),l.addEventListener("click",r=>{open(o.src,"_blank")});let a=document.querySelector(".s-popup-close");return a.onclick=()=>{this.close()},this._postLoad(),this}}function Pe(t,e){let s=document.createElement("div");s.className="s-card";let i=document.createElement("span");i.className="s-name",i.textContent=t.name,s.appendChild(i);let l=document.createElement("div");l.className="s-card-right",s.appendChild(l);let n=t.lang,o=document.createElement("div");o.className="s-languages",l.appendChild(o),n.forEach(ue=>{let O=document.createElement("span");O.textContent=ue,O.className=`s-lang-${ue}`,o.appendChild(O)});let a=document.createElement("span");a.className="s-char-count";let r=document.createElement("span");r.className="material-symbols-outlined char-count-symbol",r.textContent="tag";let f=document.createElement("span");f.textContent=t.characterCount.toLocaleString()||"0",console.log(t),a.appendChild(r),a.appendChild(f),l.appendChild(a);let c=document.createElement("span");c.className="s-time-taken";let d=document.createElement("span");d.className="material-symbols-outlined date-symbol",d.textContent="schedule";let g=document.createElement("span");g.textContent=De(t.time),c.appendChild(d),c.appendChild(g),l.appendChild(c);let S=document.createElement("button");return S.className="s-open-preview c-pointer",S.textContent="Open",S.setAttribute("pid",t.pid),l.appendChild(S),S.addEventListener("click",()=>{ne(e,t.pid)}),s}async function Te(t){console.log("Creating Submission Menu"),_&&(_.close(),console.log("already a menu"));let e=await Ze(t.uid,t.pid);_=new Xe(e,t),_.load()}const w=le(),p={};let qe="popularity",xe=!0;function et(t){qe=t}function tt(t){xe=t}function st(){setTimeout(()=>{Ae=document.querySelector("#search")},100)}async function it(t){let e=await new Promise(s=>{y.emit("getChallenges",t?.length?t:void 0,20,0,p,qe,xe,i=>{s(i)})});return typeof e=="object"?(e=e.map(s=>U.from(s)),e=e.sort((s,i)=>{let l=s.contest?1:0;return(i.contest?1:0)-l}),e):[]}class U{constructor(e,s,i,l,n,o,a,r,f,c){(!n||n=="")&&(n="/images/fillerthumbnail.png"),this.name=s,this.desc=i,this.inProgress=l,this.imgURL=n,this.pid=o,this.submitted=a,this.cID=e,this.difficulty=r,this.ongoing=f,this.submission_count=c,this.sub_highlights=[]}name;desc;inProgress;imgURL;pid;submitted;cID;difficulty;ongoing;submission_count;timespan;sub_highlights;contest;onlyViewAfterEnd;startDate;endDate;allowSubmissionAfterEnd;static from(e){let s=new U(e.id,e.name,e.desc,!1,e.imgUrl,null,!1,e.difficulty,e.ongoing,e.submission_count);return s.timespan=e.timespan,s.sub_highlights=e.hl,s.inProgress=e.inProgress,s.submitted=e.completed,s.contest=e.contest,s.onlyViewAfterEnd=e.onlyViewAfterEnd,s.allowSubmissionAfterEnd=e.allowSubmissionAfterEnd,s.startDate=e.startDate,s.endDate=e.endDate,s}}let P;async function $e(t){P&&P.close(),P=new nt(t),P.load()}class nt extends ie{constructor(e){super("Challenge Menu"),this.c=e}c;load(){super.load();let e=lt(this.c.desc),s=0,i=new Date().getTime();this.c.startDate&&i<new Date(this.c.startDate).getTime()&&(s=1),this.c.allowSubmissionAfterEnd||this.c.endDate&&i>new Date(this.c.endDate).getTime()&&(s=2);let l=!0;this.c.onlyViewAfterEnd&&i<new Date(this.c.endDate).getTime()&&(l=!1),this.menu.innerHTML=`
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
                                      View All (${l?this.c.submission_count:"?"})
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
                        ${s==0?`
                            <div class="two-col" style="grid-template-columns:1fr">
                                ${this.c.inProgress?"":'<button style="width:100%" class="c-upload"><h3>Upload</h3><span class="material-symbols-outlined c-start-arrow">upload<span/></button>'}
                                <button style="width:100%" class="c-start"><h3>${this.c.inProgress?"Continue":"Start"}</h3><span class="material-symbols-outlined c-start-arrow">arrow_forward_ios<span/></button>
                            </div>
                        `:`
                            <div style="margin:20px 0px">
                                <div class="material-symbols-outlined" style="margin-bottom:10px">info</div>
                                <div style="line-height:1.5">${s==1?`You cannot submit until <br> ${new Date(this.c.startDate).toLocaleString([],{dateStyle:"short",timeStyle:"short"})}`:`Submissions have been closed since <br> ${new Date(this.c.endDate).toLocaleString([],{dateStyle:"short",timeStyle:"short"})}`}</div>
                            </div>
                        `}
                      </div>
                  </div>
              </div>
        `;let n=this.menu.querySelector(".c-view-all"),o=this.menu.querySelector(".c-popup-img-cont"),a=this.menu.querySelector(".c-start"),r=this.menu.querySelector(".c-upload");if(n.addEventListener("click",c=>{ne(this.c.cID,"")}),o.addEventListener("click",c=>{ze(this.c.imgURL)}),a?.addEventListener("click",c=>{this.c.inProgress?ut(this.c.cID):rt(this.c.cID)}),r?.addEventListener("click",c=>{w.challengeUpload={cid:this.c.cID,files:[],progress:0,status:"none",step:0},w.challengeMenuOpen=!0}),this.c.sub_highlights.length)for(let c=0;c<this.c.sub_highlights.length;c++){let d=Pe(this.c.sub_highlights[c],this.c.cID);document.querySelector(".c-implementations").appendChild(d)}else document.querySelector(".c-implementations").innerHTML=`<i>${l?"There are currently no submissions to this challenge. Upload one to be featured here!":`Submissions won't be shown until after ${new Date(this.c.endDate).toLocaleString([],{dateStyle:"short",timeStyle:"short"})}`}</i>`,document.querySelector(".c-implementations").classList.add("empty"),document.querySelector(".c-view-all").classList.add("empty"),console.log("No submissions found for this challenge.");document.querySelector(".c-popup-left");let f=document.querySelector(".c-popup-close");return f.onclick=()=>{this.close()},this._postLoad(),this}}function lt(t){let e=document.createElement("span");e.className="popup-class-text";let s=t.split(`
`);for(let i=0;i<s.length;i++){let l=document.createElement("span");l.textContent=s[i],e.append(l)}return e}async function ot(t,e=0){return new Promise(s=>{y.emit("getChallenge",t,e,i=>{s(U.from(i))})})}let Ae;async function k(){if(w.challengeArray=await it(Ae?.value),console.log("challenges",Me(w.challengeArray)),w.challengeArray==null){alert("Failed to fetch challenges. Please try again later.");return}}class at extends ie{constructor(e){super("Delete Progress","delete"),this.cID=e}cID;load(e){super.load();let s=w.challengeArray.find(i=>i.cID==this.cID).name;return this.body.innerHTML=`
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
          `,this.body.querySelector(".c-cancel-btn").addEventListener("click",()=>{ye(),this.close()}),this.body.querySelector(".c-confirm-btn").addEventListener("click",()=>{we(this.cID),this.close()}),this}confirmChoice(){we(this.cID),this.close()}onClose(){ye()}}const v=le();let h,m,b,oe,ae,ce,ve,Z,be,u,K;const A="BCC-01";let Q,T,W,q=[],I=0,M=0,N;console.log("loaded practice");async function yt(){if(h=document.querySelector(".c-in-progress-container"),m=document.querySelector(".c-outer-in-progress"),b=document.querySelector(".c-browse-container"),oe=document.querySelector(".c-ip-container-header"),ae=document.querySelector(".c-in-progress-counter"),ce=document.querySelector(".c-browse-counter"),document.querySelector(".c-browse-container-header"),document.querySelector(".c-home"),ve=document.querySelector(".clear-filters"),Z=document.querySelector(".c-sort-div"),be=document.querySelector("form.c-search"),K=document.querySelectorAll('input[type="checkbox"]'),Q=new URL(location.href),T=Q.searchParams.get("cid")||"",W=Q.searchParams.get("filteroptions"),W&&(q=W.split(",")||[]),ve?.addEventListener("click",()=>{Object.keys(p).forEach(e=>{delete p[e]}),K.forEach(e=>{e.checked=!1}),x()}),K.forEach(e=>{e.addEventListener("change",s=>{m.classList.contains("collapse")&&F(u,!0);const i=s.target.value,l=s.target.checked,n=s.target.name;if(l)p[n]||(p[n]=[]),p[n].push(i);else{const o=p[n].indexOf(i);o>-1&&p[n].splice(o,1),p[n].length===0&&delete p[n]}x()})}),!await Se()){console.warn("not logged in, aborting load");return}if(q.length>0){let e;console.log(q);for(let s of q)e=document.querySelector(`input#${s}`),console.log(e),e&&(e.checked=!0,p[e.name]=[e.value])}await k(),await R(v.challengeArray,!0);let t=localStorage.getItem(`${A}toggleState`)||"open";if(N=v.challengeArray.length==0?!0:t=="open",m.classList.add("window-load"),N==!1&&u?(m.classList.add("collapse"),m.style.overflow="hidden",h.style.overflow="hidden",u.classList.remove("point-up"),u.classList.add("point-down")):(m.style.overflow="visible",h.style.overflow="visible"),T&&T!='""'){await te(T);let e=new URL(location.href);e.searchParams.delete("cid"),window.history.replaceState({},document.title,e.toString())}Z.addEventListener("mousedown",()=>{se(Z,()=>["Popularity","Popularity","Alphabetical (A-Z)","Alphabetical (Z-A)"],e=>{e==0&&$("popularity",!0),e==1&&$("popularity",!1),e==2&&$("alphabetical",!0),e==3&&$("alphabetical",!1),Ce()},{getIcons(){return["keyboard_double_arrow_down","keyboard_double_arrow_up","keyboard_double_arrow_down","keyboard_double_arrow_up"]},openToLeft:!0})}),be.addEventListener("submit",e=>{e.preventDefault(),x()}),st(),x()}async function F(t,e){m.classList.remove("window-load"),t&&(e==!0?(localStorage.setItem(`${A}toggleState`,"open"),N=!0,t.classList.remove("point-down"),t.classList.add("point-up"),m.classList.remove("collapse"),await ee(200),h.style.overflow="visible",m.style.overflow="visible"):e==!1&&(localStorage.setItem(`${A}toggleState`,"closed"),N=!1,t.classList.remove("point-up"),t.classList.add("point-down"),m.classList.add("collapse"),m.style.overflow="hidden",h.style.overflow="hidden"))}function ct(t){t&&(t.onclick=function(){F(t,localStorage.getItem(`${A}toggleState`)!="open")})}async function rt(t,e=!0){return new Promise(s=>{y.emit("startChallenge",t,i=>{if(typeof i=="number"){alert("Error while trying to start challenge, error code:"+i),s(void 0);return}e&&Ee(i),s(i)})})}async function ut(t){let e=await new Promise(s=>{y.emit("continueChallenge",t,i=>{s(i)})});e!=null&&Ee(e)}async function R(t,e){e&&await Ge([b,h],400);for(let s of t)pt(s);await Le(),t.length==0&&F(u,!0),M<=0?(h.classList.add("empty"),h.innerHTML="<i>Start working on a challenge, and it'll show up here!</i>",u&&u.remove()):(h.classList.remove("empty"),oe.contains(u)||dt()),I==0?(b.classList.add("empty"),b.innerHTML="<i>No challenges match your search. Try another filter option!</i>"):b.classList.remove("empty"),ae.innerHTML=`(${M})`,ce.innerHTML=`(${I})`,ct(u)}function dt(){u=document.createElement("span"),u.classList.add("material-symbols-outlined","c-toggle"),u.innerHTML="expand_less",oe.append(u)}function pt(t){let e=document.createElement("div");if(e.classList.add("c-card"),e.setAttribute("cID",t.cID),t.inProgress?(h.appendChild(e),M++):(b.appendChild(e),I++),e.innerHTML=`
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
		`,e.querySelector(".c-img-div")?.addEventListener("click",n=>{te(t.cID)}),e.querySelector(".c-preview")?.addEventListener("click",n=>{te(t.cID)}),e.querySelector(".c-submissions")?.addEventListener("click",n=>{ne(t.cID,"")}),t.inProgress){let n=document.createElement("span");n.className="c-details material-symbols-outlined",n.innerHTML="more_horiz",n.addEventListener("mousedown",o=>{se(n,()=>["Delete Progress"],a=>{a==0&&mt(t.cID)},{getIcons(){return["delete"]},openToLeft:!0})}),e.appendChild(n)}if(t.submitted){let n=document.createElement("span");n.className="c-submitted",n.innerHTML='<span class="material-symbols-outlined">select_check_box</span>Submitted',e.appendChild(n)}return e}let X;function mt(t){X&&X.close(),X=new at(t).load()}function ye(){document.querySelector(".c-delete-div")&&document.querySelector(".c-delete-div").remove(),document.querySelector(".c-confirm-div")&&document.querySelector(".c-confirm-div").remove()}async function we(t){console.log("Deleting progress on challenge: "+t);let e=await new Promise(s=>{y.emit("deleteChallengeProgress",t,i=>{s(i)})});console.log("delete progress res: ",e),e!=0?alert("Failed to delete challenge progress, error code: "+e):(await k(),re(),R(v.challengeArray))}async function te(t){console.log("::::: CHALLENGE",v.challengeArray.find(e=>e.cID==t)),await $e(v.challengeArray.find(e=>e.cID==t))}async function x(){await k(),re(),R(v.challengeArray)}function re(){b.innerHTML="",h.innerHTML="",I=0,M=0,ae.innerHTML="",ce.innerHTML=""}async function $(t,e){re(),et(t),tt(e),await k(),R(v.challengeArray),v.challengeArray.filter(s=>s.inProgress).length==1&&F(u,!1)}export{bt as a,we as d,yt as i,rt as s,le as u};
