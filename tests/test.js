const { createButton, openAlert } = require('..');
const { toHaveAttribute, toBeInTheDocument } = require('@testing-library/jest-dom/matchers');

expect.extend({ toHaveAttribute, toBeInTheDocument });

beforeEach( () => {
  window.alert = jest.fn();
  document.body.innerHTML = '';
});

describe('Funkcja createButton', () => {
  it('powinna zwrócić element HTML', async () => {
    const result = createButton();

    expect(result instanceof HTMLElement).toBeTruthy();
  });

  it('powinna zwrócić element z atrybutem id ustawionym na super-button', async () => {
    const button = createButton();

    expect(button).toHaveAttribute('id', 'super-button');
  });

  it('powinna utworzyć element super-button w elemencie <body>', async () => {
    createButton();

    expect(document.body.querySelector('#super-button')).toBeInTheDocument();
  });

  it('powinna wywołać funkcję openAlert gdy element #super-button został kliknięty', async () => {
    expect(window.alert).not.toHaveBeenCalled();
    createButton();
    document.body.querySelector('#super-button').click();

    expect(window.alert).toHaveBeenCalledWith('super');
  });
});

describe('Funkcja openAlert', () => {
  it('powinna wywołać window.alert z ciągiem znaków "super"', async () => {
    expect(window.alert).not.toHaveBeenCalled();
    openAlert();

    expect(window.alert).toHaveBeenCalledWith('super');
  });
});
