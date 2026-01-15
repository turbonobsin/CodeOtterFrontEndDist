import{H as L}from"./Header-qTmbpJZ4.js";import{s as j,d as _,b as P,e as T,f as q,g as A,i as E,F as H,o as N}from"./index-BA_zY1xG.js";import{w as $,h as M,s as U,t as m,u as V,a as B,l as h,b as F}from"./util-BTTZT_bN.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./xterm-CbIsyoms.js";const O="/images/water-level.png",R="/images/wallpaper.png",D=V(),{g_user:t}=j(D);let c,r,w,x,k,b,l=[{title:"Completed ",number:"0",icon:"select_check_box"},{title:"Submitted: ",number:"0",icon:""},{title:"In Progress: ",number:"0",icon:""}],i=[{title:"Completed ",number:"0",icon:"select_check_box"},{title:"Total Time Spent: ",number:"0 minutes",icon:""},{title:"Average Time Spent: ",number:"0 minutes",icon:""}],n=[{title:"Projects: ",number:"0",icon:""},{title:"Time Spent: ",number:"0 minutes",icon:""},{title:"Average Time: ",number:"0 minutes",icon:""}];async function I(){await $()&&(c=document.querySelector(".p-challenge-stats"),r=document.querySelector(".p-lesson-stats"),w=document.querySelector(".p-join-date"),x=document.querySelector(".p-username"),k=document.querySelector(".p-view-submissions"),b=document.querySelector(".p-project-stats"),await J(),await M())}async function J(){if(!await $())return;let s=await G();document.querySelectorAll(".remove-on-load").forEach(u=>{u.remove()}),document.querySelectorAll(".vishidden").forEach(u=>{u.classList.remove("vishidden")});let p=new Date(t.value.data._joinDate),o={year:"numeric",month:"short"};w.innerHTML=p.toLocaleDateString("en-US",o),x.textContent=t.value.data.name.length<24?t.value.data.name:t.value.data.name.substring(0,24)+"...";let d=document.querySelector(".p-pfp");t.value.data.picture&&(d.src=`${t.value.data.picture}`,d.style.padding="0px",d.crossOrigin="anonymous"),await U([c,r,b],400),r.className="p-lesson-stats",r.innerHTML=`
        <div class="p-stat circle-stat">        
            <div class="p-stat-name">
                <span class="material-symbols-outlined">
                    <span class="material-symbols-outlined">${i[0].icon}</span>
                </span>
                <span class="">${i[0].title}</span>
            </div>
            <span class="p-stat-contents circle">${s.lessonsCompleted}/${s.totalLessons}</span>
        </div>
        <div class="p-stat-cont-nested">
            <div class="p-stat split-stat">
                <div class="flx-sb">
                    <div class="p-stat-name">
                        <span class="material-symbols-outlined">${i[1].icon}</span>
                        <span class="">${i[1].title}</span>
                    </div>
                    <span class="p-stat-contents">${m(s.totalLessonTime)}</span>
                </div>
            </div>
            <div class="p-stat split-stat">
                <div class="flx-sb">
                    <div class="p-stat-name">
                        <span class="material-symbols-outlined">${i[2].icon}</span>
                        <span class="">${i[2].title}</span>
                    </div>
                    <span class="p-stat-contents">${m(s.averageLessonTime)}</span>
                </div>
            </div>
        </div>
    `,y("lesson",s),c.className="p-challenge-stats",c.innerHTML=`
        <div class="p-stat circle-stat">        
            <div class="p-stat-name">
                <span class="material-symbols-outlined">
                    <span class="material-symbols-outlined">${l[0].icon}</span>
                </span>
                <span class="">${l[0].title}</span>
            </div>
            <span class="p-stat-contents circle">${s.challengesCompleted}/${s.totalChallenges}</span>
        </div>
        <div class="p-stat-cont-nested">
            <div class="p-stat split-stat">
                <div class="flx-sb">
                    <div class="p-stat-name">
                        <span class="material-symbols-outlined">${l[1].icon}</span>
                        <span class="">${l[1].title}</span>
                    </div>
                    <span class="p-stat-contents">${s.challengesSubmitted}</span>
                </div>
                <div class="flx-e">
                    <button class="p-view-submissions">View</button>
                </div>
            </div>
            <div class="p-stat split-stat">
                <div class="flx-sb">
                    <div class="p-stat-name">
                        <span class="material-symbols-outlined">${l[2].icon}</span>
                        <span class="">${l[2].title}</span>
                    </div>
                    <span class="p-stat-contents">${s.challengesInProgress===0?"None":s.challengesInProgress}</span>
                </div>
            </div>
        </div>
    `,y("challenge",s),b.className="p-project-stats",b.innerHTML=`
        <div class="flx p-proj-stat">
            <div class="flx">
                <span class="material-symbols-outlined">
                    <span class="material-symbols-outlined">${n[0].icon}</span>
                </span>
                <span class="">${n[0].title}</span>
            </div>
            <span class="flx-e">${s.totalProjects}</span>
        </div>
        <div class="flx p-proj-stat">
            <div class="flx">
                <span class="material-symbols-outlined">
                    <span class="material-symbols-outlined">${n[1].icon}</span>
                </span>
                <span class="">${n[1].title}</span>
            </div>
            <span class="flx-e">${m(s.totalProjectTime)}</span>
        </div>
        <div class="flx p-proj-stat">
            <div class="flx">
                <span class="material-symbols-outlined">
                    <span class="material-symbols-outlined">${n[2].icon}</span>
                </span>
                <span class="">${n[2].title}</span>
            </div>
            <span class="flx-e">${m(s.averageProjectTime)}</span>
        </div>
    `,y("project",s);let v=s.lessonsCompleted/s.totalLessons*100,a=r.querySelector(".circle");a&&(a.style.background=`conic-gradient(var(--learn-col) 0% ${v}%, transparent ${v}% 100%)`);let C=document.querySelector(".p-view-submissions");document.querySelector(".p-view-inprogress"),C?.addEventListener("click",u=>{window.location.href="/practice?filteroptions=completed"});let f=s.challengesCompleted/s.totalChallenges*100,S=c.querySelector(".circle");S&&(S.style.background=`conic-gradient(var(--practice-col) 0% ${f}%, transparent ${f}% 100%)`)}function y(s,g){let e=document.querySelector(`#cb-${s}-visibility`),p=document.querySelector(`.${s}-public-toggle`);if(!e||!p){console.warn("Failed to find checkboxes/buttons for visibility");return}e.checked=g.settings[s+"StatsPublic"]??!1;let o=!0;p.addEventListener("click",async d=>{if(!o)return;o=!1;let v=e.checked;e.checked=!e.checked,console.log("send...");let a=await B("PATCH","/user/stat_visibility",{id:s,value:e.checked},{isJSON:!0});if(console.log("RES...",a),!a){e.checked=v;return}e.checked=a.value,o=!0})}k?.addEventListener("click",s=>{location.href="/practice?filteroptions=completed"});async function G(){let s=await t.value.getStats();return console.log("STATS:",s),s}const Y=_({__name:"ProfileView",setup(s){return P(()=>{h("/styles/home.css"),h("/styles/profile.css"),h("/styles/util.css"),I()}),T(()=>{F()}),(g,e)=>(N(),q(H,null,[A(L,{"btn-index":3}),e[0]||(e[0]=E('<div class="p-cont-outer"><div class="p-cont-inner intro-up"><div class="p-first"><img class="p-pfp" src="'+O+'" style="padding:5px;"><div class="p-header-top"><img src="'+R+'" alt="" class="header-background" crossorigin="anonymous"></div><div class="p-header-bottom"><div class="p-h-b-l"><span class="p-username">Username</span></div><div class="p-h-b-r"><div class="p-badges"><span class="badge">...</span><span class="p-join-date badge">...</span></div></div></div></div><div class="p-second"><div class="p-section-title"><div><span class="material-symbols-outlined">Auto_stories</span> Lesson Stats </div><div class="p-section-title-right"><button class="lesson-public-toggle public-toggle vishidden"><input id="cb-lesson-visibility" type="checkbox"><label for="cb-lesson-visibility">Public</label></button></div></div><div class="p-lesson-stats vishidden"><i class="remove-on-load">Log in to view statistics for lessons you complete!</i></div></div><div class="p-third"><div class="p-section-title"><div class="p-section-title-left"><span class="material-symbols-outlined">Checkbook</span> Challenge Stats </div><div class="p-section-title-right"><button class="challenge-public-toggle public-toggle vishidden"><input id="cb-challenge-visibility" type="checkbox"><label for="cb-challenge-visibility">Public</label></button></div></div><div class="p-challenge-stats vishidden"><i class="remove-on-load">Log in to view statistics for challenges you complete!</i></div></div><div class="p-fourth"><div class="p-section-title"><div><span class="material-symbols-outlined">Experiment</span> Project Stats </div><div class="p-section-title-right"><button class="project-public-toggle public-toggle vishidden"><input id="cb-project-visibility" type="checkbox"><label for="cb-project-visibility">Public</label></button></div></div><div class="p-project-stats vishidden"><i class="remove-on-load">Log in to view statistics for projects you work on!</i></div></div></div></div>',1))],64))}});export{Y as default};
