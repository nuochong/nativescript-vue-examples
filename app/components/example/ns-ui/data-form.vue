<template>
  <StackLayout>
    <RadDataForm :source="ticket" :metadata="ticketMetadata">
    </RadDataForm>
  </StackLayout>
</template>

<script>
import { getMovies, MovieConverter } from './data/data';
const movies = getMovies();

export default {
  name: 'dataform-view',
  data() {
    return {
      ticket: {
        movie: 123,
        date: '2016-04-06',
        time: '20:00',
        type: '2D',
        price: 9.5,
        numberOfTickets: 2,
        contactName: null,
        contactPhone: null,
        contactEmail: null,
        agreeTerms: false
      },
      ticketMetadata: {
        isReadOnly: false,
        commitMode: 'Immediate',
        validationMode: 'Immediate',
        propertyAnnotations: [
          {
            name: 'movie',
            displayName: 'Movie Name',
            index: 0,
            editor: 'Picker',
            valuesProvider: movies.map(value => value.name),
            converter: new MovieConverter(movies)
          },
          {
            name: 'date',
            displayName: 'Date',
            index: 1,
            editor: 'DatePicker'
          },
          {
            name: 'time',
            displayName: 'Time',
            index: 2,
            editor: 'TimePicker'
          },
          {
            name: 'type',
            displayName: 'Type',
            index: 3,
            editor: 'SegmentedEditor',
            valuesProvider: ['2D', '3D']
          },
          {
            name: 'price',
            displayName: 'Price',
            index: 4,
            editor: 'Decimal',
            readOnly: true
          },
          {
            name: 'numberOfTickets',
            displayName: 'Number Of Tickets',
            index: 5,
            editor: 'Stepper',
            editorParams: {
              minimum: 0,
              maximum: 20,
              step: 2
            }
          },
          {
            name: 'contactName',
            displayName: 'Contact Name',
            index: 6,
            editor: 'Text',
            validators: [
              {
                name: 'NonEmpty'
              },
              {
                name: 'MinimumLength',
                params: {
                  length: 4
                }
              }
            ]
          },
          {
            name: 'contactPhone',
            displayName: 'Contact Phone',
            index: 7,
            editor: 'Phone'
          },
          {
            name: 'contactEmail',
            displayName: 'Contact Email',
            index: 8,
            editor: 'Email',
            validators: [
              {
                name: 'RegEx',
                params: {
                  regEx: '^[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}\\@telerik.com$',
                  errorMessage: 'Please provide your @telerik.com email.'
                }
              }
            ]
          },
          {
            name: 'agreeTerms',
            displayName: 'I Agree with Terms',
            index: 9,
            editor: 'Switch',
            validators: [
              {
                name: 'IsTrueValidator'
              }
            ]
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
