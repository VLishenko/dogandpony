<script setup>
	import { reactive, computed, ref } from 'vue';
	import { TheMask } from 'vue-the-mask';

	const form = reactive({
		data: {
			title: '',
			address: '',
			name: '',
			job: '',
			email: '',
			phone: '',
		},
		errors: {

		}
	});

	const isFormVisible = ref(false);

	const isFormFilled = computed(()=>{
		for (const input in form.data) {
			if( form.data[input] == '' ) {
				return false;
			}
		}

		return true;
	});

	function submitForm() {
		form.errors = {};

		for (const input in form.data) {
			if( form.data[input] == '' ) {
				form.errors[input] = 'empty';
			}
			
			// Email Validation
			if( input == 'email' && form.data[input] !== '' ) {
				var mailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

				form.errors[input] = ( !mailRegEx.test(form.data[input]) ) ? 'wrong_format' : '';
			}
		}
	};
	
	function toggleShow() {
		isFormVisible.value = !isFormVisible.value;
	}
</script>

<template>
	<section>
		<!-- Start Add Location Btn -->
		<a 
			href="javascript:;" 
			class="flex justify-between items-center bg-blue text-white rounded-lg shadow-lg px-6" 
			:class="{
				'h-0 opacity-0 invisible':isFormVisible, 
				'py-4 mt-8 h-auto visible opacity-100 duration-[400ms] transition-opacity':!isFormVisible
			}"
			@click="toggleShow"
		>
			<span>Add New Location</span>

			<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-white">
				<line x1="9" y1="5.37286e-08" x2="9" y2="16" stroke="inherit"/>
				<line x1="16.5" y1="8.5" x2="0.5" y2="8.5" stroke="inherit"/>
			</svg>	
		</a>
		<!-- End Add Location Btn -->
	
		<!-- Start Location -->
		<div 
			class="rounded-lg shadow-lg px-6 bg-white overflow-hidden ease-in" 
			:class="{
				'h-0 opacity-0 invisible':!isFormVisible, 
				'pb-5 pt-3 mt-8 h-auto visible opacity-100 duration-[400ms] transition-opacity':isFormVisible
			}"
		>
			<div class="flex justify-between items-center">
				<span class="font-bold">New Location</span>
				
				<svg 
					width="35" 
					height="35" 
					viewBox="0 0 17 16" 
					fill="none" 
					xmlns="http://www.w3.org/2000/svg" 
					class="stroke-grey hover:stroke-blue origin-center rotate-45 p-2 -mr-2 cursor-pointer" 
					@click="toggleShow"
				>
					<line x1="9" y1="5.37286e-08" x2="9" y2="16" class="stroke-inherit" />
					<line x1="16.5" y1="8.5" x2="0.5" y2="8.5" class="stroke-inherit" />
				</svg>	
			</div>

			<form class="mt-10">
				<label class="block">
					<span>Title <span class="text-grey">*</span></span>

					<input 
						type="text" 
						v-model="form.data.title" 
						@focus="form.errors.title = ''" 
						class="form-input w-full" 
						:class="{'has-error':form.errors.title}" 
					/>

					<p class="form-error" v-if="form.errors.title">
						This field cannot be empty
					</p>
				</label>

				<label class="block mt-6">
					<span>Enter the address <span class="text-grey">*</span></span>

					<input 
						type="text" 
						v-model="form.data.address" 
						@focus="form.errors.address = ''" 
						class="form-input w-full" 
						:class="{'has-error':form.errors.address}" 
					/>
					
					<p class="form-error" v-if="form.errors.address">
						This field cannot be empty
					</p>
				</label>

				<div class="text-xs text-blue uppercase mt-8 border-b border-light-grey pb-4">Contact information</div>
				
				<label class="block mt-6">
					<span>Full name <span class="text-grey">*</span></span>

					<input 
						type="text" 
						v-model="form.data.name" 
						@focus="form.errors.name = ''" 
						class="form-input w-full" 
						:class="{'has-error':form.errors.name}"
					/>

					<p class="form-error" v-if="form.errors.name">
						This field cannot be empty
					</p>
				</label>

				<label class="block mt-6">
					<span>Job Position <span class="text-grey">*</span></span>

					<input 
						type="text" 
						v-model="form.data.job" 
						@focus="form.errors.job = ''" 
						class="form-input w-full" 
						:class="{'has-error':form.errors.job}"
					/>

					<p class="form-error" v-if="form.errors.job">
						This field cannot be empty
					</p>
				</label>

				<label class="block mt-6">
					<span>
						Email address 
						<span class="text-grey">*</span>
					</span>

					<input 
						type="text" 
						placeholder="name@example.com" 
						v-model="form.data.email" 
						@focus="form.errors.email = ''" 
						class="form-input w-full" 
						:class="{'has-error':form.errors.email}"
					/>
					
					<p class="form-error" v-if="form.errors.email == 'empty'">
						This field cannot be empty
					</p>

					<p class="form-error" v-if="form.errors.email == 'wrong_format'">
						Please, check your email address
					</p>
				</label>

				<label class="block mt-6">
					<span>Phone <span class="text-grey">*</span></span>

					<the-mask 
						type="text" 
						placeholder="(xxx) xxx-xxxx" 
						v-model="form.data.phone" 
						@focus="form.errors.phone = ''" 
						class="form-input w-full" 
						:class="{'has-error':form.errors.phone}"
						mask="(###) ###-####"
					/>
					

					<p class="form-error" v-if="form.errors.phone">
						This field cannot be empty
					</p>
				</label>

				<input 
					type="submit" 
					class="form-submit mt-6"
					:class="{'is-active':isFormFilled}" 
					@click.prevent="submitForm" 
				>
			</form>
		</div>
		<!-- End Location -->
	</section>
</template>
