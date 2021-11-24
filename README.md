[![CI](https://github.com/redxzeta/use-react-custom-hooks/actions/workflows/main.yml/badge.svg?branch=edge)](https://github.com/redxzeta/use-react-custom-hooks/actions/workflows/main.yml)

# Use-Custom-Simple-Hooks

A collection of custom React hooks that could be useful

## Installation

Install my-project with npm

```bash
  npm install use-simple-hooks

```

Install with yarn

```bash
  yarn add use-simple-hooks

```

## Features

- Toggle Custom Hook
- Form Custom Hook

## Usage/Examples

### useForm

```javascript
const initValue = { name: '' };
const App = () => {
  const [display, setDisplay] = useState(false);
  const { form, handleChange, onSubmit } = useForm(initValue, () =>
    setDisplay(true)
  );
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label id="name-label">Name</label>
        <input
          aria-label="name-label"
          name="name"
          onChange={handleChange}
          value={form.name}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
      {display && <h1>Hello {form.name}</h1>}
    </div>
  );
};
```

### useToggle

```javascript
const App = () => {
    const { toggle, handleToggle, handleToggleOn, handleToggleOff } = useToggle()
  );
  return (
    <div>
        <button onClick={handleToggle}>Toggle Display</button>
        {toggle && <h1>Hello There! </h1>}
    </div>
  );
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Lessons Learned

What did you learn while building this project?

Learning how to use TypeScript and publishing an npm package.
