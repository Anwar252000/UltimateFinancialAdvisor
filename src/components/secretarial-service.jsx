import React from 'react';

const SecretarialService = () => {
	return (
		<>
			<div>
				<h1 className='component-heading' style={{ position: 'relative' }}>
					OUR SERVICES
				</h1>
				<svg
					viewBox='0 0 200 200'
					xmlns='http://www.w3.org/2000/svg'
					style={{ position: 'absolute', width: 200 }}
				>
					<path
						fill='#8A3FFC'
						d='M29.4,-46C37.2,-34.8,42.1,-25,48.2,-13.9C54.3,-2.7,61.7,9.9,59.4,20.1C57.2,30.3,45.3,38.1,33.8,45.4C22.3,52.7,11.1,59.5,1.3,57.7C-8.6,55.9,-17.1,45.7,-25.6,37.4C-34.1,29.1,-42.5,22.8,-53.3,12C-64.1,1.2,-77.3,-14.1,-74.1,-24.1C-70.8,-34.1,-51.2,-38.8,-36.1,-47.6C-21.1,-56.5,-10.5,-69.5,0.1,-69.7C10.8,-69.9,21.6,-57.3,29.4,-46Z'
						transform='translate(100 100)'
					/>
				</svg>
				<div className='container my-2 py-4'>
					<h2 className='heading' style={{ position: 'relative' }}>
						BACK OFFICE SUPPORT & SERVICES
					</h2>
					<div className='d-flex flex-column-reverse flex-sm-row justify-content-center align-items-center'>
						<div className=' col-sm-12 col-md-6'>
							<p>
								We providing back office services as it is important and even
								more so in some cases than the front office. Without a proper
								functioning foundation, your business cannot work to its full
								potential
							</p>
							<h4>Data Entry & Book Keeping</h4>
							<p>All kind of data entry related work etc</p>
							<h4>Document Drafting</h4>
							<p>Professional paper, statutory document, legal document etc</p>
							<h4>Digital Marketing</h4>
							<p>
								Digital Marketing, social media marketing, SEO, Email marketing
								etc
							</p>
							<h4>Payroll & Miscellaneous</h4>
							<p>
								HR payroll preparation, HR paymaster, administrative
								documentation, etc
							</p>
						</div>
						<div className='col-sm-12 col-md-6'>
							<img
								src='img/intro/p5.gif'
								className='img-fluid float-right'
								alt='Right-hand side image'
							/>
							<svg
								viewBox='0 0 200 200'
								xmlns='http://www.w3.org/2000/svg'
								style={{ position: 'absolute', width: 350 }}
							>
								<path
									fill='#8A3FFC'
									d='M30.6,-35.2C39.1,-29.2,45.3,-19.1,54,-4.4C62.7,10.4,74.1,29.8,67,35.5C59.9,41.2,34.5,33,16.9,34.1C-0.8,35.2,-10.6,45.6,-16.3,43.9C-22.1,42.2,-23.8,28.5,-32.7,17C-41.6,5.5,-57.7,-3.7,-61.8,-16.2C-65.9,-28.7,-58.1,-44.3,-45.8,-49.6C-33.5,-55,-16.8,-50,-2.9,-46.5C11,-43.1,22,-41.2,30.6,-35.2Z'
									transform='translate(100 100)'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SecretarialService;
