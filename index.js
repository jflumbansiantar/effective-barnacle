async function changeContent(page) {
	var contentDiv = document.getElementById('side-content');
	contentDiv.style.display='block';
	
	const projectCard = await fetch(`http://localhost:3000/card/lang-id?lang_id=IDN`);
	
	switch (page) {
		case 'about':
			const getAboutPageData = await fetch(`http://localhost:3000/topic/about?about=About&lang_id=EN`);
			let dataAbout = await getAboutPageData.json();
			contentDiv.innerHTML = ` ${dataAbout.data.title} <div id='get-detail'>${dataAbout.data.details}</div> `;
			let details = document.getElementById('get-detail').textContent;
			contentDiv.innerHTML = ` ${dataAbout.data.title} ${details}`;
			break;
		case 'projects':
			contentDiv.innerHTML = 
				`<h2>Proyek</h2> 
				<p>
					Beberapa proyek yang pernah saya kerjakan :)
				</p> 
				<div class="row grid text-center">
					<div id='project1' class="card project ">
						<h3 class="card-header">Sales Apps Project</h3>
						<div class="card-body">
							<h6 class="card-title">
								Role sebagai Backend Developer (Java)<p/>
								di Maybank Indonesia tahun 2024 - 2025 <p/>
							</h6>
						</div>
						<div class="card-footer">
							<ul>
								<li>Java Springboot</li>
								<li>JSP</li>
								<li>NodeJS/ExpressJS</li>
								<li>ReactJS</li>
								<li>React Native</li>
								<li>OracleDB</li>
							</ul>
						</div>
					</div>
					<div id='project2' class='card project'> 
						<h3 class="card-header">Data Migration Project</h3>
						<div class="card-body">
							<h6 class="card-title">
								Role sebagai FullStack Developer  (ASP.NET)<p/>
								di Protelindo tahun 2024 <p/>
							</h6>
						</div>
						<div class="card-footer">
							<ul>
								<li>ASP.NET</li>
								<li>PostgreSQL</li>
								<li>SQL Server</li>
							</ul>
						</div>
					</div>
					<div id='project3' class='card project'>
						<h3 class="card-header">Security Web Apps Project </h3>
						<div class="card-body">
							<h6 class="card-title">
								Role sebagai Back End Developer (.NET4.8)<p/>
								di <b>sebuah perusahaan di Kalimantan</b> tahun 2025 <p/>
							</h6>
						</div>
						<div class="card-footer">
							<ul>
								<li>.NET4.8</li>
								<li>PostgreSQL</li>
								<li>ReactJS</li>
								<li>React Native</li>
							</ul>
						</div>
					</div>
					<div id='project4' class='card project'>
						<h3 class="card-header">ERP Ming Project </h3>
						<div class="card-body">
							<h6 class="card-title">
							Role sebagai Supervisor IT <p/>
							di MING tahun 2022 <p/>
							</h6>
						</div>
						<div class="card-footer">
							<ul>
								<li>Python (Frappe)</li>
								<li>HTML</li>
								<li>MariaDB</li>
							</ul>
						</div>
					</div>
				</div>
				
				`;
			break;
		case 'resume':
			contentDiv.innerHTML = `
				<a href="https://drive.google.com/file/d/10qCh65XZG-iVdCE6hCynVL0JFciR8aPV/view?usp=sharing" download="cv_julia_2025">Klik disini</a>`;
			break;
		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}

/*	INI PEMANGGILAN API */
async function getEverythingExceptProjectByLanguageId(lang) {
	const getEverythingExceptProject = await fetch(`http://localhost:3000/topic/topic-by-lang-id?lang_id=${lang}`);
	
	const found = await getEverythingExceptProject.json();
	let data = found.data;
	var contentDiv = document.getElementById('content');
	let greetings = data.find(d => d.about == 'Pembukaan' || d.about == 'Greeting');
	const buttons = data.filter(d => d.about == 'Tombol' || d.about == 'Button');

	//Greetings
	let greetingHTML = greetings.title + greetings.details;

	//Button
	let buttonsHTML = ``;
	for (let element = 0; element < buttons.length; element++) {
		const e = buttons[element];
		let btns = `<button class="btn btn-${e.details}" onclick="changeContent('${e.details}')">${e.title}</button>`;

		buttonsHTML += btns;
	};

	contentDiv.innerHTML = greetingHTML + buttonsHTML;
}
getEverythingExceptProjectByLanguageId('IDN');