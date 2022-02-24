import Notiflix from 'notiflix';

const formRef = document.querySelector('.form')

formRef.addEventListener('submit', formSubmit)

function formSubmit(e) {
  e.preventDefault()

  const delay = Number(e.currentTarget.elements.delay.value)
  const step = Number(e.currentTarget.elements.step.value)
  const amount = Number(e.currentTarget.elements.amount.value)

  for (let i = 0; i < amount; i += 1) {
    const stepDelay = delay + (i * step)
    createPromise(i + 1, stepDelay)
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  const promise = new Promise((resolve, reject) => {setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
      promise.then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      });
      promise.catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, delay);
  })
  }