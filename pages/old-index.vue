<template>
	<div class="pb-20">

		<div class="flex items-center justify-center border-t-2 border-blue bg-white h-[80px] w-full absolute top-0 left-0">
			<div class="flex items-center justify-center">
				<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-blue mr-5">
					<path d="M1 7L5 11L15 1" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>

				<span class="uppercase text-xs">The locaton has been updated.</span>
			</div>

			<a href="javascript:;" class="inline-flex items-center justify-center transition-all w-[60px] h-full absolute top-0 right-0 hover:opacity-70">
				<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-blue">
					<path d="M1.16406 13L13.4928 1L1.16406 13ZM1.16406 1L13.4928 13L1.16406 1Z" fill="inherit"/>
					<path d="M1.16406 1L13.4928 13M1.16406 13L13.4928 1L1.16406 13Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>

			</a>
		</div>

		<section class="w-80 m-auto mt-40">
			<h1 class="text-6xl text-center text-blue font-light">Offices</h1>

			<!-- Start Add Location -->
			<a href="javascript:;" class="flex justify-between items-center bg-blue text-white rounded-lg shadow-lg py-4 px-6 mt-8">
				<span>Add New Location</span>

				<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-white">
					<line x1="9" y1="5.37286e-08" x2="9" y2="16" stroke="inherit"/>
					<line x1="16.5" y1="8.5" x2="0.5" y2="8.5" stroke="inherit"/>
				</svg>	
			</a>
			<!-- End Add Location -->

			<!-- Start Location -->
			<div class="rounded-lg shadow-lg py-4 pb-5 px-6 mt-6 bg-white">
				<div class="flex justify-between items-center">
					<span class="font-bold">New Location</span>
					
					<svg 
						width="35" 
						height="5" 
						viewBox="0 0 17 16" 
						fill="none" 
						xmlns="http://www.w3.org/2000/svg" 
						class="stroke-grey hover:stroke-blue origin-center rotate-45 p-2 -mr-2 cursor-pointer"
					>
						<line x1="9" y1="5.37286e-08" x2="9" y2="16" class="stroke-inherit" />
						<line x1="16.5" y1="8.5" x2="0.5" y2="8.5" class="stroke-inherit" />
					</svg>	
				</div>

				<form class="mt-10">
					<label class="block">
						<span>Title <span class="text-grey">*</span></span>
						<input type="text" minlength="2" class="form-input w-full peer valid:bg-none" />
						<p class="form-error hidden peer-invalid:block">
							This field cannot be empty
						</p>
					</label>

					<label class="block mt-6">
						<span>Enter the address <span class="text-grey">*</span></span>
						<input type="text" minlength="2" class="form-input w-full peer valid:bg-none" />
						<p class="form-error hidden peer-invalid:block">
							This field cannot be empty
						</p>
					</label>

					<div class="text-xs text-blue uppercase mt-8 border-b border-light-grey pb-4">Contact information</div>
					
					<label class="block mt-6">
						<span>Full name <span class="text-grey">*</span></span>
						<input type="text" minlength="2" class="form-input w-full peer valid:bg-none" />
						<p class="form-error hidden peer-invalid:block">
							This field cannot be empty
						</p>
					</label>

					<label class="block mt-6">
						<span>Job Position <span class="text-grey">*</span></span>
						<input type="text" minlength="2" class="form-input w-full peer valid:bg-none" />
						<p class="form-error hidden peer-invalid:block">
							This field cannot be empty
						</p>
					</label>

					<label class="block mt-6">
						<span>Email address <span class="text-grey">*</span></span>
						<input type="text" minlength="2" placeholder="name@example.com" class="form-input w-full peer valid:bg-none" />
						<p class="form-error hidden peer-invalid:block">
							This field cannot be empty
						</p>
					</label>

					<label class="block mt-6">
						<span>Phone <span class="text-grey">*</span></span>
						<input type="text" minlength="2" placeholder="(xxx) xxx-xxxx" class="form-input w-full peer valid:bg-none" />
						<p class="form-error hidden peer-invalid:block">
							This field cannot be empty
						</p>
					</label>

					<input type="submit" class="form-submit mt-6">
				</form>
			</div>
			<!-- End Location -->

			<!-- Start Saved Lovation -->
			<div class="accordion mt-6">
				<div class="accordion-header">
					<h4 class="accordion-header-title">Headquarters</h4>
					<p class="accordion-header-text">3763 W. Dallas St.</p>

					<svg width="36" height="36" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="accordion-header-ic">
						<path d="M1 1L9 9L17 1" stroke-linecap="round" stroke-linejoin="round" class="stroke-inherit"/>
					</svg>
				</div>
			</div>
			<!-- End Saved Lovation -->

			<!-- Start Saved Lovation -->
			<div class="accordion mt-6 is-open">
				<div class="accordion-header">
					<h4 class="accordion-header-title">Headquarters</h4>
					<p class="accordion-header-text">3763 W. Dallas St.</p>

					<svg width="36" height="36" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="accordion-header-ic">
						<path d="M1 1L9 9L17 1" stroke-linecap="round" stroke-linejoin="round" class="stroke-inherit"/>
					</svg>
				</div>

				<div class="accordion-body">
					<div class="pb-4 border-b border-light-grey">
						<div class="text-xl font-bold">Hellena John</div>
						<div class="mt-2">Software Tester</div>
						<a href="mailto:georgia.young@example.com" class="inline-block mt-2 text-blue">georgia.young@example.com</a>
						<div class="mt-2">(808) 555-0111</div>
					</div>

					<div class="flex align-middle justify-between mt-3">
						<a href="javascript:;" class="inline-flex items-center py-1 hover:opacity-80">
							<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-grey mr-3">
								<path d="M13.232 3.23199L16.768 6.76799M14.732 1.73199C15.2009 1.26309 15.8369 0.999664 16.5 0.999664C17.1631 0.999664 17.7991 1.26309 18.268 1.73199C18.7369 2.2009 19.0003 2.83687 19.0003 3.49999C19.0003 4.16312 18.7369 4.79909 18.268 5.26799L4.5 19.036H1V15.464L14.732 1.73199Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<span class="text-grey text-inherit uppercase text-xs">Edit</span>
						</a>

						<a href="javascript:;" class="inline-flex items-center py-1 hover:opacity-80">
							<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-red mr-3">
								<path d="M7 9V15M11 9V15M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>

							<span class="text-red uppercase text-xs">Delete</span>
						</a>
					</div>
				</div>
				
			</div>
			<!-- End Saved Lovation -->

			<div class="text-center mt-6">
				<p class="text-grey">This project is for test purpose only.</p>
				<a 
					href="https://www.dogandponystudios.com/" 
					target="_blank" 
					rel="noindex nofollow"
					class="text-blue mt-2"
				>
					www.dogandponystudios.com
				</a>
			</div>
		</section>
		
	</div>
</template>
