const Months = [
    {
      label: 'January',
      key: 'January',
    },
    {
      label: 'February',
      key: 'February',
    },
    {
      label: 'March',
      key: 'March',
    },
    {
      label: 'April',
      key: 'April',
    },
    {
        label: 'May',
        key: 'May',
    },
    {
        label: 'June',
        key: 'June'
    },
    {
        label: 'July',
        key: 'July'
    },
    {
        label: 'August',
        key: 'August'
    },
    {
        label: 'September',
        key: 'September'
    },
    {
        label: 'October',
        key: 'October'
    },
    {
        label: 'November',
        key: 'November'
    },
    {
        label: 'December',
        key: 'December'
    }
]

const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}

const Status = [{label: 'Success', key: 'Success'}, {label: 'Pending', key: 'Pending'}]

const Customers = [
    {
        name: 'Flyod Johntosan',
        email: 'johntosan@gmail.com',
        status: 'Success',
        date: 'Nov 02, 2021',
        invoice: '100,00',
        gender: 'male',
        peoples: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    },
    {
        name: 'Flyod Johntosan',
        email: 'johntosan@gmail.com',
        status: 'Pending',
        date: 'Nov 02, 2021',
        invoice: '100,00',
        gender: 'male',
        peoples: ['A', 'B', 'C']
    }
]
  export{
    Months,
    getItem,
    Status,
    Customers
  }