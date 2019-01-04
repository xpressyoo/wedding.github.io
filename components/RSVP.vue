<template>
    <v-layout row wrap class="RSVP">
        <v-flex sm12 md3 lg4>
        </v-flex>
        <v-flex sm12 md9 lg8>
            <v-card class="RSVP_Content pa-3">
                <v-container>
                    <v-layout row wrap align-top justify-center>
                        <v-flex sm12 md9 lg6 v-if="!thanks" class="RSVP_Content__Form">
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
                                <template v-if="roomType && roomType.toLowerCase() !== 'no'">
                                    <span>We'll take care of the booking. You can pay CHF<v-chip label>{{ (roomType === 'Double') ? '80' : '50' }}.-</v-chip> by:</span>
                                    <v-radio-group v-model="payment" row>
                                        <v-radio value="Twint" color="primary" @change="dialogTwint = true">
                                            <div slot="label"><img width="75" src="/images/twint.png" alt="Twint" /></div>
                                        </v-radio>
                                        <v-radio value="PayPal" color="primary" @change="goToPayPal()">
                                            <div slot="label"><img width="75" src="/images/paypal.png" alt="PayPal" /></div>
                                        </v-radio>
                                        <v-radio value="Bank" color="primary" @change="goToGoogleDoc()">
                                            <div slot="label">Bank Transfer</div>
                                        </v-radio>
                                    </v-radio-group>
                                </template>

                                <v-btn
                                @click.stop="saveData()"
                                :loading="isSaving"
                                :disabled="(!name || name.trim().length < 2) || (isPresent === null) || (isPresent && isPresentForDinner === null)"
                                class="mt-2 RSVP_Submit d-block"
                                outline
                                large
                                round>
                                    Submit
                                </v-btn>
                            </form>
                        </v-flex>
                        <v-flex xs12 sm9 md6 v-else class="RSVP_Content__Form">
                            <img v-if="isPresent" src="https://media.giphy.com/media/z2u1v6gk170vC/giphy.gif" class="mb-4 GIF"/>
                            <img v-else src="https://media.giphy.com/media/3o6ZtrtmTObNwRB9AY/giphy-tumblr.gif" class="mb-4 GIF"/>
                            <p class="display-1 font--special">{{ thanks }}</p>
                            <p v-if="isPresent">In case of questions, ping us at <a href="mailto:reception@grandhotel.wedding">reception@grandhotel.wedding</a></p>
                        </v-flex>
                        <v-flex lg6 class="hidden-md-and-down text-xs-center">
                            <img src="/images/rsvp.png" class="d-block wobble-hor-bottom"  @click="dialogInfo = true"/>
                            <v-btn
                                class="RSVP_Info elevation-3"
                                @click="dialogInfo = true"
                                dark
                                fab
                                icon>
                                <v-icon large>info</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
        <v-dialog
        v-model="dialogTwint"
        max-width="480"
        lazy>
            <v-card>
                <v-card-title class="headline"><img height="72" src="/images/twint.png" alt="Twint" /></v-card-title>

                <v-card-text>
                    Please send your Twint payment to Angèle's or Florian's Swiss mobile phone number. In case you don't know these details, just enter your own phone number below and we'll send a payment request your way.
                    <v-text-field prepend-icon="smartphone" label="Phone number" name="phone" v-model="phone"></v-text-field>
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="primary"
                    flat="flat"
                    @click="dialogTwint = false"
                >
                    Done
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog
        v-model="dialogInfo"
        width="500"
        >
        <v-card>
            <v-card-title
            class="headline grey lighten-4"
            primary-title
            >
            <v-icon left>info_outline</v-icon>
            Information
            </v-card-title>

            <v-card-text>
            <p>More details will be added to this website in the coming weeks. Ensure to check it on a regular basis to be kept up-to-date.</p>
            <p>Meanwhile, you can contact Angèle or Florian by sending an email to:</p>
            <p class="text-xs-center"><v-chip color="primary" dark large class="mlr-auto mt-0 subheading d-inline-block">reception@grandhotel.wedding</v-chip></p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                flat
                @click="dialogInfo = false"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        dialogInfo: false,
        dialogTwint: false,
        dialogBank: false,
        payment: null,
        phone: null,
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
        goToPayPal () {
            window.open('https://www.paypal.me/florianbersier')
        },
        goToGoogleDoc () {
            window.open('https://docs.google.com/document/d/1Cts4cFz0Z6I9i2SCAomv2_AlRY6SgLkShIjoejvrHLo/edit?usp=sharing')
        },
        saveData () {
            if (!this.name) return
            this.isSaving = true
            let params = new URLSearchParams()
            params.append('Name',  this.name.trim())
            params.append('Presence', this.isPresent)
            params.append('Presence Details', this.isPresentForDinner)
            params.append('Dietary Requirements', this.hasDietaryRequirements)
            params.append('Room', this.roomType)
            params.append('Payment Method', this.payment)
            params.append('Email', this.email)
            params.append('Phone', this.phone)
           
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
        background: #f8f2ed;

        &__Form {
            max-width: 500px
        }
    }

    &_Submit {
        margin-left: auto;
        margin-right: auto
    }

    &_Info {
        background: #36223e
    }
}
h2 {
    width: 100%
}
img {
    max-width: 100%;
    margin: 0 auto;

    &.GIF {
        width: 100%
    }
}
</style>