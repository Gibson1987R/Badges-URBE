import faker from 'faker';

const api = {
  badges: {
    list() {
      const badges = Object.values(window.localStorage);
      const parsedBadges = badges.map((e) => JSON.parse(e));
      console.log('api > list > parsedBadges: ', parsedBadges);
      return parsedBadges;
    },
    create(badge) {
      const id = faker.random.uuid();
      const badgeWithId = {
        id,
        ...badge,
      };
      window.localStorage.setItem(id, JSON.stringify(badgeWithId));
    },
    read(id) {
      return JSON.parse(window.localStorage.getItem(id) || '');
    },
    update(id, updates) {
      const oldBadge = JSON.parse(window.localStorage.getItem(id) || '');
      const newBadge = {
        ...oldBadge,
        ...updates,
      };
      window.localStorage.setItem(id, newBadge);
    },
    remove(id) {
      window.localStorage.removeItem(id);
    },
  },
};

export default api;
