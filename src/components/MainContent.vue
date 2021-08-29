<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="1500"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="imgSlideCarousel"
            src="https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="imgSlideCarousel"
            src="https://images.pexels.com/photos/574205/pexels-photo-574205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="imgSlideCarousel"
            src="https://images.pexels.com/photos/5759706/pexels-photo-5759706.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="imgSlideCarousel"
            src="https://images.pexels.com/photos/4062463/pexels-photo-4062463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <b-form class="formReservation" @submit.stop.prevent>
      <label class="mr-sm-2">Pick Location:</label>
      <b-form-select
        v-model="pickLocationValue"
        :options="pickLocation"
        size="sm"
        class="mt-1"
      ></b-form-select>
      <label class="mr-sm-2">Return Location:</label>
      <b-form-select
        v-model="returnLocationValue"
        :options="returnLocation"
        size="sm"
        class="mt-1"
      ></b-form-select>
      <label class="mt-2" for="example-datepicker">Choose a pick date</label>
      <div class="timeClass">
        <b-form-datepicker v-model="pickDate" class="mr-2"></b-form-datepicker>
        <b-form-timepicker v-model="pickTime" locale="en"></b-form-timepicker>
      </div>
      <label class="mt-3" for="example-datepicker">Choose a return date</label>
      <div class="timeClass">
        <b-form-datepicker
          v-model="returnDate"
          class="mr-2"
        ></b-form-datepicker>
        <b-form-timepicker v-model="returnTime" locale="en"></b-form-timepicker>
      </div>
      <b-button class="mt-2" block variant="outline-dark">Search</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sliding: null,
        pickLocation: [
          "İstanbul",
          "İzmir",
          "Ankara",
          "Antalya",
          "Sakarya",
          "Kocaeli",
        ],
        pickLocationValue: "İstanbul",
        returnLocation: [
          "İstanbul",
          "İzmir",
          "Ankara",
          "Antalya",
          "Sakarya",
          "Kocaeli",
        ],
        returnLocationValue: "Ankara",
        pickDate: "",
        pickTime: "",
        returnDate: "",
        returnTime: "",
      };
    },
    methods: {
      onSlideStart() {
        this.sliding = true;
      },
      onSlideEnd() {
        this.sliding = false;
      },
    },
  };
</script>

<style>
  .formReservation {
    position: absolute;
    height: 370px;
    max-width: 600px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    margin-top: -500px;
    margin-left: 200px;
    z-index: 9999;
    text-shadow: none;
  }
  .imgSlideCarousel {
    width: 100%;
    height: 600px;
    -webkit-filter: brightness(70%);
  }
  .timeClass {
    display: flex;
    flex-direction: row;
  }
</style>
