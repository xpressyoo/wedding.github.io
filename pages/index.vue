<template>
	<v-app>
		<div class="Wrapper ma-0 pa-0">
			<banner />
			<rsvp />
			<wedding-details />
			<v-btn
				icon
				fixed
				bottom
				color="pink"
				dark
				fab
				class="mb-4 ml-4"
				@click.native="toggleSound">
					<v-icon>{{ volumeState }}</v-icon>
				</v-btn>
			<iframe src="audio/silence.mp3" allow="autoplay" hidden></iframe>
			<audio loop autoplay controls hidden>
				<source src="audio/bg.mp3" type="audio/mp3">
			</audio>
		</div>
	</v-app>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Rsvp from '~/components/RSVP.vue'
import WeddingDetails from '~/components/Wedding.vue'

export default {
	components: {
		Banner,
		Rsvp,
		WeddingDetails
  },
  data () {
    return { 
			volumeState: 'volume_off'
		}
  },
  methods: {
    toggleSound () {
			let audio = document.getElementsByTagName('audio')
			if (this.volumeState === 'volume_off') {
				this.volumeState = 'volume_up'
			} else {
				this.volumeState = 'volume_off'
			}
			for(var e = 0; e < audio.length; audio[e].muted = !audio[e].muted, e++);
		}
  },
  mounted () {
	}
}
</script>

<style lang="scss" scoped>
.Wrapper {
	min-height: 100%;
	background: url('/images/head.jpg') #333333 no-repeat center top / cover;
}
</style>
