import userEvent from "@testing-library/user-event";

export const fillInForm = async (formEls, values, { withAvatar = true } = {}) => {
  const nameInput = await formEls.findByLabelText(/name/i);
  const bhpInput = await formEls.findByLabelText(/bhp/i);
  const avatarInput = await formEls.findByLabelText(/avatar url/i);

  await userEvent.type(nameInput, values.name);
  expect(nameInput).toHaveValue(values.name);

  await userEvent.type(bhpInput, values.bhp);
  expect(bhpInput).toHaveValue(values.bhp);

  if (withAvatar) {
    await userEvent.type(avatarInput, values.avatar_url);
    expect(avatarInput).toHaveValue(values.avatar_url);
  }
};

