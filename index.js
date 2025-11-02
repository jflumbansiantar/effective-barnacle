function changeContent(page) {
	var contentDiv = document.getElementById('side-content');
	contentDiv.style.display='block';
	const mainContentDiv = document.getElementById('content');
	mainContentDiv.style.width = '350px';
	switch (page) {
		case 'about':
			contentDiv.innerHTML = `
			
				<h2>Halooooo</h2>
				<p>
					Kenalin , Saya Fran!.
				</p>
				<p>
					Saya sudah menjadi software developer selama 4 tahun lebih. Bahasa pemograman yang saya biasa saya gunakan itu Java SpringBoot. Tapi saya juga bisa .NET, Javascript, dan Python.
				</p><p>
					Saya biasanya ditempatkan di backend developer dan kadang juga jadi fullstack developer.
				</p><p>	Kalau untuk database sendiri, yang sering saya gunakan itu SQL Database seperti OracleDB dan PostgreSQL.
					Pernah pake Redis juga dan pakai MongoDB (lebih sering dipakai untuk proyek pribadi yang tidak pernah dideploy ><)
				</p>
				<p>
					Anyway, salam kenal yaaaaa
				</p>
			`;
			break;
		case 'project':
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
								Klien : Maybank Indonesia <p/>
								Role sebagai Backend Developer (Java)<p/>
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
						<h3 class="card-header">Protelindo Dashboard Project</h3>
						<div class="card-body">
							<h6 class="card-title">
								Klien : Protelindo <p/>
								Role sebagai FullStack Developer  (ASP.NET)<p/>
							</h6>
						</div>
						<div class="card-footer">
							<ul>
								<li>ASP.NET</li>
								<li>PostgreSQL</li>
								<li>Microsoft SQL Server</li>
							</ul>
						</div>
					</div>
					<div id='project3' class='card project'>
						<h3 class="card-header">Credit Policy System Project </h3>
						<div class="card-body">
							<h6 class="card-title">
								Klien : Maybank Indonesia <p/>
								Role sebagai FullStack Developer  (Java)<p/>
							</h6>
						</div>
						<div class="card-footer">
							<ul>
								<li>Java Springboot</li>
								<li>JSP</li>
								<li>OracleDB</li>
							</ul>
						</div>
					</div>
					<div id='project4' class='card project'>
						<h3 class="card-header">ERP Project </h3>
						<div class="card-body">
							<h6 class="card-title">
								Klien : MING <p/>
								Role sebagai Supervisor IT <p/>
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

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}

// function hideSideContent(){
// 	var contentDiv = document.getElementById('side-content');
// 	// contentDiv.style.display='none';
	
// }

function changePlaceholder() {
    var placeHolder = ['Search for topics...', 'Find information...', 'Type your query...', 'Explore content...', 'Ask anything...'];
    var n = 0;
    var loopLength = placeHolder.length;
    var searchInput = document.getElementById('search-input');
    var currentText = '';
    var charIndex = 0;
    var isDeleting = false;

    function typeWriter() {
        var currentPlaceholder = placeHolder[n];

        if (!isDeleting) {
            // Typing effect
            currentText = currentPlaceholder.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentPlaceholder.length) {
                // Pause at end of word
                setTimeout(function() {
                    isDeleting = true;
                }, 1000);
            }
        } else {
            // Deleting effect
            currentText = currentPlaceholder.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex < 0) {
                isDeleting = false;
                n = (n + 1) % loopLength;
                charIndex = 0;
                // Pause before starting next word
                setTimeout(typeWriter, 500);
                return;
            }
        }

        searchInput.placeholder = currentText;
        setTimeout(typeWriter, isDeleting ? 50 : 100); // Faster when deleting
    }

    // Start the typewriter effect
    typeWriter();
}

// Call the function to start changing placeholders
changePlaceholder();
// hideSideContent();

{/* <form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form> */}