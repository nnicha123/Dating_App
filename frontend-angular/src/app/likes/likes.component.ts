import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent implements OnInit {
  likes = [
    {
      profile_pic: '../../assets/persons/mia.jpg',
      first_name: 'Mia',
      last_name: 'Thermopolis',
      total_hearts: 50,
      about_me: 'I love dogs',
    },
    {
      profile_pic: '../../assets/persons/ruby.jpg',
      first_name: 'Ruby',
      last_name: 'James',
      total_hearts: 20,
      about_me: 'When I see you I run out of words to say',
    },
    {
      profile_pic: '../../assets/persons/rohan.jpg',
      first_name: 'Rohan',
      last_name: 'Pops',
      total_hearts: 10,
      about_me: 'Who shall separate us from the love of Christ',
    },
    {
      profile_pic: '../../assets/persons/sally.jpg',
      first_name: 'Sally',
      last_name: 'Johnson',
      total_hearts: 10,
      about_me: 'I love dogs',
    },
    {
      profile_pic: '../../assets/persons/tasha.jpg',
      first_name: 'Tasha',
      last_name: 'Jones',
      total_hearts: 100,
      about_me: 'I love dogs',
    },
    {
      profile_pic: '../../assets/persons/sarah.jpg',
      first_name: 'Sarah',
      last_name: 'Sue',
      total_hearts: 10,
      about_me: "I love dogs and many other animals but you don't have to know",
    },

    {
      profile_pic: '../../assets/persons/polly.jpg',
      first_name: 'Polly',
      last_name: 'Pinna',
      total_hearts: 30,
      about_me: 'I love dogs',
    },
    {
      profile_pic: '../../assets/persons/kayden.jpg',
      first_name: 'Kayden',
      last_name: 'Lu',
      total_hearts: 10,
      about_me: 'I love dogs',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
