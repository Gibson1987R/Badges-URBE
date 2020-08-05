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
      return JSON.parse(window.localStorage.getItem(id) || 'null');
    },
    update(id, updates) {
      const oldBadge = window.localStorage.getItem(id);
      const oldBadgeParsed = JSON.parse(oldBadge);
      const newBadge = {
        ...oldBadgeParsed,
        ...updates,
      };
      window.localStorage.setItem(id, JSON.stringify(newBadge));
    },
    remove(id) {
      window.localStorage.removeItem(id);
    },
  },
};

export default api;
