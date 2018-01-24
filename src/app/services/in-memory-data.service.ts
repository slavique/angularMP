import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {
        name: 'user1',
        password: '1111',
        id: 1234
      }
    ];
    const courses = [
      {
        title: 'Window cleaning',
        description: 'How to master window cleaning in 3 hours.',
        date: new Date(2018, 11, 2),
        duration: 180,
        topRated: false,
        id: '111'
      },
      {
        title: 'Toilet cleaning',
        description: 'How to master toilet cleaning in 2 hours.',
        date: new Date(2017, 11, 1),
        duration: 140,
        topRated: false,
        id: '222'
      },
      {
        title: 'How to clean your slate',
        description: 'After this course you\'ll be able to start a new life.',
        date: new Date(2017, 11, 20),
        duration: 315,
        topRated: true,
        id: '333'
      }
    ];
    return {courses, users};
  }
}
