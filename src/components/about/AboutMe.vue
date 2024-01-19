<script>
const old = (new Date()).getFullYear() - 2005
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'Hi, I am a ' + old + ' years old self-taught BackEnd Developer with expert certification by Dicoding Indonesia. Expertise in golang, javascript, restAPI, NodeJs, postgreSQL, Docker, etc. I\'am fast learner, technology enthusiasm.',
				},
        {
          id: 2,
          bio:
              'Passionate about technology, programming, machine learning, and also backend development',
        }
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
