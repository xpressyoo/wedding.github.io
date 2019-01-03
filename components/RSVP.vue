<template>
    <v-layout row wrap class="RSVP">
        <v-flex sm12 md3 lg4>
        </v-flex>
        <v-flex sm12 md9 lg8>
            <v-card class="RSVP_Content pa-3">
                <v-container>
                    <v-layout row wrap align-top>
                        <v-flex sm12 md9 lg6 v-if="!thanks">
                            <h2 class="d-block font--special display-3 font-weight-light text-xs-center">RSVP</h2>
                            <p class="font--special title mt-2 text-xs-center lh-15">Please kindly respond no later than March 1st, 2019.</p>
                            <form class="gform">
                                <v-text-field label="Name" name="name" v-model="name" required></v-text-field>
                                <v-text-field label="Email" name="email" type="email" v-model="email" :class="{ 'd-none' : email}" required></v-text-field>
                                <v-select
                                :items="presence"
                                v-model="isPresent"
                                single-line
                                label="Accepts or Declines"
                                name="presence"
                                id="presence"
                                ></v-select>
                                <v-select
                                :items="presenceDetails"
                                v-model="isPresentForDinner"
                                prepend-icon="local_bar"
                                single-line
                                label="And will be present..."
                                name="presenceDetails"
                                :class="{ 'd-none' : !isPresent }"
                                ></v-select>
                                <v-textarea
                                name="dietary"
                                :class="{ 'd-none' : (!isPresentForDinner || isPresentForDinner.length < 9)}"
                                v-model="hasDietaryRequirements"
                                flat
                                single-line
                                prepend-icon="restaurant_menu"
                                rows="1"
                                label="Please detail any special dietary requirements here"
                                ></v-textarea>
                                <v-select
                                :items="room"
                                prepend-icon="local_hotel"
                                single-line
                                label="Will stay for 1 night at the Grand Hotel?"
                                name="room"
                                v-model="roomType"
                                :class="{ 'd-none' : (!isPresentForDinner || isPresentForDinner.length < 9)}"
                                ></v-select>
                                <v-btn
                                @click.stop="saveData()"
                                :loading="isSaving"
                                class="mt-2 RSVP_Submit d-block"
                                outline
                                large
                                round>
                                    Submit
                                </v-btn>
                            </form>
                        </v-flex>
                        <v-flex xs12 sm9 md6 v-else>
                           <p class="display-1 font--special">{{ thanks }}</p>
                           <p v-if="isPresent">In case of questions, feel free to reach us at <v-chip><a href="mailto:reception@grandhotel.wedding">reception@grandhotel.wedding</a></v-chip></p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        name: null,
        email: null,
        isPresent: null,
        isPresentForDinner: null,
        hasDietaryRequirements: null,
        roomType: null,
        isSaving: false,
        thanks: false,
        presence: [{
            text: 'Accepts with pleasure',
            value: true
        }, {
            text: 'Declines with regrets',
            value: false
        }],
        presenceDetails: [{
            text: 'Present for the cocktail',
            value: 'cocktail'
        }, {
            text: 'Present for the cocktail & dinner',
            value: 'cocktail and dinner'
        }],
        room: [{
            text: 'Double room (CHF 80.- per room)',
            value: 'Double'
        }, {
            text: 'Shared room (CHF 50.- per person)',
            value: '1 bed'
        }, {
            text: 'No, thanks.',
            value: 'No'
        }]
    }),
    methods: {
        saveData () {
            if (!this.name) return
            this.isSaving = true
            let params = new URLSearchParams()
            params.append('Name',  this.name.trim())
            params.append('Presence', this.isPresent)
            params.append('Presence Details', this.isPresentForDinner)
            params.append('Dietary Requirements', this.hasDietaryRequirements)
            params.append('Room', this.roomType)
            params.append('Email', this.email)
           
            axios.post(
                'https://script.google.com/macros/s/AKfycby1r2DuWGBlIaue7rQz13I8MbMU2MGCX7U6q4NotQ/exec', 
                params,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
                ).then(res => {
                    this.isSaving = false
                    if (this.isPresent) {
                        this.thanks = `Looking forward to seeing you on the 8th of June, ${this.name.trim().split(' ').shift()}!`
                    } else {
                        this.thanks = `Sorry you cannot make it, ${this.name.trim().split(' ').shift()}. Hope to see you soon!`
                    }
                })
            }
    },
    mounted () {
       this.email = this.$route.query.email || null
    }
}
</script>

<style lang="scss" scoped>
.RSVP {
    position: relative;
    margin-top: 25%;
    
    &_Content {
        background: #f8f2ed
    }

    &_Submit {
        margin-left: auto;
        margin-right: auto
    }
}
h2 {
    width: 100%
}
</style>