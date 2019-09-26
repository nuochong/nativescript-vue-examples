import { Color } from 'tns-core-modules/color'
import { ObservableArray } from 'tns-core-modules/data/observable-array'
import { CalendarEvent } from 'nativescript-ui-calendar'

export const getEvents = (count) => {
  let now = new Date()
  let startDate, endDate, event
  let colors = [
    new Color(200, 188, 26, 214),
    new Color(220, 255, 109, 130),
    new Color(255, 55, 45, 255),
    new Color(199, 17, 227, 10),
    new Color(255, 255, 54, 3),
  ]
  let events = new Array()
  for (let i = 1; i < count; i++) {
    startDate = new Date(
      now.getFullYear(), now.getMonth(), i * 2, 1
    )
    endDate = new Date(
      now.getFullYear(), now.getMonth(), (i * 2), 3
    )
    event = new CalendarEvent(
      `event ${i}`, startDate, endDate, false, colors[i * 10 % (colors.length - 1)]
    )
    events.push(event)
    if (i % 3 === 0) {
        const event = new CalendarEvent(`second ${i}`, startDate, endDate, true, colors[i * 5 % (colors.length - 1)])
        events.push(event)
    }
  }
  return events
}

export const getItemList = (count) => {
  let itemList = []
  for (let i = 0; i < count; i++) {
    itemList.push({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Item ${i + 1} description`,
      image: `~/assets/images/example/ns-ui/${i % 6}.jpg`,
    })
  }
  return itemList
}

export const simpleItemList = getItemList(20)

export const getMovies = () => {
  let movies = new Array();
  movies.push({id: 123, name: 'Zootopia'})
  movies.push({id: 217, name: 'Captain America'})
  movies.push({id: 324, name: 'The Jungle Book'})
  return movies;
}

export class MovieConverter {

  constructor(movies) {
    this._movies = movies
  }

  convertFrom(id) {
    return this._movies.filter((movie) => movie.id === id)[0].name
  }

  convertTo(name) {
    return this._movies.filter((movie) => movie.name === name)[0].id
  }
}

export const getCountriesData = () => {
  return new ObservableArray([
    { Country: 'Germany', Amount: 15 },
    { Country: 'France', Amount: 13 },
    { Country: 'Bulgaria', Amount: 24 },
    { Country: 'Spain', Amount: 11 },
    { Country: 'USA', Amount: 18 }
  ])
}
