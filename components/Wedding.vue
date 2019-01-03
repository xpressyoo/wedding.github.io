<template>
    <v-layout row wrap class="Wedding">
        <v-flex sm12 md10 lg9>
          <v-card class="Wedding_Content px-3 pt-0 pb-4 mt-0">
            
            <v-layout row wrap justify-end>
                <v-flex sm12 md9 lg7>
                    <v-card color="white" flat class="Wedding_Agenda">
                        <v-layout row wrap>
                            <v-flex xs6 sm3 class="text-xs-center py-3">
                                <img alt="" src="/images/ring.svg"/>
                                <h4 class="grey--text">Ceremony Begins</h4>
                                <h5 class="subheading">5:00 pm</h5>
                            </v-flex>
                            <v-flex xs6 sm3 class="text-xs-center py-3">
                                <img alt=""  src="/images/drinking.svg"/>
                                <h4 class="grey--text">Cocktail Hour</h4>
                                <h5 class="subheading">5:45 pm</h5>
                            </v-flex>
                            <v-flex xs6 sm3 class="text-xs-center py-3">
                                <img alt=""  src="/images/dinner.svg"/>
                                <h4 class="grey--text">Dinner Served</h4>
                                <h5 class="subheading">7:00 pm</h5>
                            </v-flex>
                            <v-flex xs6 sm3 class="text-xs-center py-3">
                                <img alt=""  src="/images/music.svg"/>
                                <h4 class="grey--text">Party Time</h4>
                                <h5 class="subheading">Till Dawn</h5>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
            
            <v-container>                
              <v-layout row wrap align-top justify-space-between>
                <h2 class="font--special display-2 pt-3">Wedding Details</h2>
                <v-flex sm12 md4>
                    <h3 class="font--special headline my-3">Location</h3>
                    <p class="mr-2 pb-2 subheading font-weight-light">Our wedding will be held at the Grand Hôtel in Chandolin, Switzerland. Weather permitting, the ceremony and cocktail will take place outdoors. Situated at 2,000 meters of altitude, the house has a long history and counts famous  visitors like Winston Churchill, the German chancellor Konrad Adenauer, Ferdinand von Zeppelin or the painter Edouard Ravel.</p>
                    <v-layout row wrap justify-center>
                        <v-btn outline round class="my-2 mlr-auto" href="https://goo.gl/maps/jy38546FPG62" target="_blank" rel="noreferrer">
                            <v-icon color="pink" left>map</v-icon>Get directions
                        </v-btn>
                    </v-layout>
                </v-flex>
                <v-flex sm12 md4>
                    <h3 class="font--special headline my-3">Accomodations</h3>
                    <p class="mr-2 subheading font-weight-light pb-2">Rooms have been booked at the Grand Hôtel. We recommend our guests to sleep in Chandolin as we want to enjoy as long as possible this special day with you all (... and the mountain road is quite dangerous by night).</p><p class="subheading font-weight-light font-style-italic pb-2">Please ensure to book a room by filling out the RSVP form.</p>
                    <v-layout row wrap justify-center>
                        <v-btn outline round class="my-2 mlr-auto" href="http://www.legrandhotelchandolin.ch/en/the-house/video/" target="_blank" rel="noreferrer">
                            <v-icon color="pink" left>local_hotel</v-icon>The Hotel
                        </v-btn>
                    </v-layout>
                </v-flex>
                <v-flex sm12 md4>
                    <h3 class="font--special headline my-3">Sunday's Activities</h3>
                    <p class="mr-2 pb-2 subheading font-weight-light pb-2">Sunday will start with a breakfast/brunch at the Hôtel. We'll then organize hiking and mountain biking activities for the ones of you who wish to enjoy a perfect Sunday "à la montagne".
                    </p><p class="subheading font-weight-light font-style-italic pb-2">More details will follow.</p>
                    <v-layout row wrap justify-center>
                        <v-btn outline round class="ml-0" href="https://www.valdanniviers.ch/tourism/chandolin.html" target="_blank" rel="noreferrer">
                            <v-icon color="pink" left>terrain</v-icon>Discover Chandolin
                        </v-btn>
                    </v-layout>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>     
        </v-flex>
        <v-flex sm12 md2 lg3>
        </v-flex>
    </v-layout>
</template>

<style lang="scss" scoped>
.Wedding {
    position: relative;
    margin-top: 20%;
    margin-bottom: 25%;
    
    &_Content {
        background: #f8f2ed
    }

    &_Agenda {
        margin-top: -40px
    }
}
h2 {
    width: 100%
}
</style>