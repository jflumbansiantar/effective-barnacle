async function changeContent(page) {
	let baseUrl = sessionStorage.getItem('baseUrl');
	var contentDiv = document.getElementById('side-content');
	contentDiv.style.display='block';
	let language = sessionStorage.getItem("languange");
	sessionStorage.setItem("page", page);

	switch (page) {
		case 'about':
			
			const getAboutPageData = await fetch(`${baseUrl}topic/about?about=About&lang_id=${language}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-vercel-protection-bypass': '1XDhgtZF5angjBJmXpYiFBtyONrXPmP1',
			}});
			
			let dataAbout = await getAboutPageData.json();
			contentDiv.innerHTML = ` ${dataAbout.data.title} <div id='get-detail'>${dataAbout.data.details}</div> `;

			let details = document.getElementById('get-detail').textContent;
			contentDiv.innerHTML = `${dataAbout.data.title} ${details}`;

			break;
		case 'projects':
			const projectCard = await fetch(`${baseUrl}card/lang-id?lang_id=${language}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-vercel-protection-bypass': '1XDhgtZF5angjBJmXpYiFBtyONrXPmP1',
			}});
			let dataCards = await projectCard.json();

			const getProjectPageData = await fetch(`${baseUrl}topic/about?about=Projects&lang_id=${language}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-vercel-protection-bypass': '1XDhgtZF5angjBJmXpYiFBtyONrXPmP1',
			}});
			let dataProject = await getProjectPageData.json();

			if(dataCards.statusCode !== 200) {
				contentDiv.innerHTML = '<h2>Page not found!</h2>';
			} else {
				let htmlCards = ``;
				for (let element = 0; element < dataCards.data.length; element++) {
					const e = dataCards.data[element];
					let liHtml = ``;
					e.stacks.forEach(x => {
						liHtml += `<li>${x}</li>`
					});
					let card = `<div id='project${element}' class="card project ">
							<h3 class="card-header">${e.title}</h3>
							<div class="card-body">
								<h6 class="card-title">
									${e.description}
								</h6>
							</div>
							<div class="card-footer">
								<ul>
									${liHtml}
								</ul>
							</div>
						</div>`;

					htmlCards += card;
				};
				
				contentDiv.innerHTML = ` ${dataProject.data.title} ${dataProject.data.details} <div class="row grid text-center"> ${htmlCards} </div>`;
			}

			
			break;
		case 'resume':
			contentDiv.innerHTML = language == 'IDN' ? `
				<a href="https://github.com/jflumbansiantar/resume-jul/blob/master/Resume%20Julia%202025.pdf" download="cv_julia_2025">Klik disini</a>` : `
				<a href="https://github.com/jflumbansiantar/resume-jul/blob/master/Resume%20Julia%202025.pdf" download="cv_julia_2025">Click here</a>`;
			break;
		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
			contentDiv.style.display='none';
	}
}

/*	INI PEMANGGILAN API */
async function getEverythingExceptProjectByLanguageId(lang) {
	let baseUrl = sessionStorage.getItem('baseUrl');

	const getEverythingExceptProject = await fetch(`${baseUrl}topic/topic-by-lang-id?lang_id=${lang}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'x-vercel-protection-bypass': '1XDhgtZF5angjBJmXpYiFBtyONrXPmP1',
		}});

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

function setLanguageId() {
	sessionStorage.setItem('baseUrl', 'https://symmetrical-eureka-ten.vercel.app/')
	var sw = document.getElementById('languageSwitch');
	sessionStorage.setItem("page", '');
	let getActivePage = sessionStorage.getItem("page");
	if (sw.checked === true ) {
		getEverythingExceptProjectByLanguageId('EN');
		sessionStorage.setItem("languange", "EN");
		changeContent(getActivePage);
		
	} else { 
		getEverythingExceptProjectByLanguageId('IDN');
		sessionStorage.setItem("languange", "IDN");
		changeContent(getActivePage);
	}
	
}
setLanguageId();
paralaxBackGround();

document.getElementById('languageSwitch').addEventListener('change', setLanguageId);

function paralaxBackGround() {
	return new FinisherHeader({
		"count": 25,
		"size": {
			"min": 200,
			"max": 900,
			"pulse": 0.5
		},
		"speed": {
			"x": {
			"min": 1.0,
			"max": 1.5
			},
			"y": {
			"min": 0,
			"max": 0.5
			}
		},
		"colors": {
			"background": "#070f71",
			"particles": [
			"#64549C",
			"#B9BCCB",
			"#950032"
			]
		},
		"blending": "lighten",
		"opacity": {
			"center": 0.15,
			"edge": 0.05
		},
		"skew": 0,
		"shapes": [
			"s", "t"
		]
	});
}


