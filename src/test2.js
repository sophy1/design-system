import { within, userEvent } from '@storybook/testing-library'


const Template = (args) => <LoginForm {...args} />;

/*
* See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
* to learn more about using the canvasElement to query the DOM
*/
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  // await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  // not-await alaram!
  userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
  
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
//   await userEvent.click(canvas.getByRole('button'));

//   // 👇 Assert DOM structure
//   await expect(
//     canvas.getByText(
//       'Everything is perfect. Your account is ready and we should probably get you started!'
//     )
//   ).toBeInTheDocument();
};
