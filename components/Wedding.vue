<template>
    <v-layout row wrap class="Wedding">
        <v-flex sm12 md10 lg9>
          <v-card class="Wedding_Content px-3 py-4">
            <v-container>
              <v-layout row wrap align-top justify-space-between>
                <h2 class="font--special display-2 pt-3">Wedding Details</h2>
                <v-flex sm12 md4>
                    <h3 class="font--special headline my-3">Location</h3>
                    <p class="mr-2 pb-2 subheading font-weight-light">Our wedding will be held at the Grand Hôtel in Chandolin, Switzerland. Weather permitting, the ceremony and cocktail will take place outdoors. Situated at 2,000 meters of altitude, the house has a long history and counts famous  visitors like the German chancellor Konrad Adenauer, Ferdinand von Zeppelin or the painter Edouard Ravel.</p>
                    <v-layout row wrap justify-center>
                        <v-btn outline round class="my-2 mlr-auto" href="https://goo.gl/maps/jy38546FPG62" target="_blank">
                            <v-icon color="pink" left>map</v-icon>Get directions
                        </v-btn>
                    </v-layout>
                </v-flex>
                <v-flex sm12 md4>
                    <h3 class="font--special headline my-3">Accomodations</h3>
                    <p class="mr-2 pb-2 subheading font-weight-light">Our wedding will be held at the Grand Hôtel in Chandolin, Switzerland. Weather permitting, the ceremony and cocktail will take place outdoors. Situated at 2,000 meters of altitude, the house has a long history and counts famous  visitors like the German chancellor Konrad Adenauer, Ferdinand von Zeppelin or the painter Edouard Ravel.</p>
                    <v-layout row wrap justify-center>
                        <v-btn outline round class="my-2 mlr-auto" href="https://goo.gl/maps/jy38546FPG62" target="_blank">
                            <v-icon color="pink" left>map</v-icon>Get directions
                        </v-btn>
                    </v-layout>
                </v-flex>
                <v-flex sm12 md4>
                    <h3 class="font--special headline my-3">Sunday's Activities</h3>
                    <p class="mr-2 pb-2 subheading font-weight-light">Our wedding will be held at the Grand Hôtel in Chandolin, Switzerland. Weather permitting, the ceremony and cocktail will take place outdoors. Situated at 2,000 meters of altitude, the house has a long history and counts famous  visitors like the German chancellor Konrad Adenauer, Ferdinand von Zeppelin or the painter Edouard Ravel.</p>
                    <v-layout row wrap justify-center>
                        <v-btn outline round class="ml-0" href="https://www.valdanniviers.ch/tourism/chandolin.html" target="_blank">
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
}
h2 {
    width: 100%
}
</style>