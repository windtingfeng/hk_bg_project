const list = [
  {
    nick: 'Allen',
    phone: 8778678768765,
    name: 'hhhhhhhhh',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2021-9-12'
  },
  {
    nick: 'Allen2',
    phone: 8778678768765,
    name: 'hhhhhhhhh',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2021-9-12'
  },
  {
    nick: 'Allen3',
    phone: 8778678768765,
    name: 'hhhhhhhhh',
    subject: '数学',
    job: 'aaaa',
    year: 22,
    updateTime: '2021-9-12'
  }
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
