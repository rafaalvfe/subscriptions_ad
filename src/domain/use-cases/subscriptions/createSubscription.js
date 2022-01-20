const createNewSubscriptionUseCase = (subscriptionRepository) => {
  const execute = async ({
    email,
    firstName,
    gender,
    birthdate,
    newsletterId,
    consent,
  }) => {
    // TO-DO: Business validations

    const id = await subscriptionRepository.createSubscription({
      email,
      firstName,
      gender,
      birthdate,
      newsletterId,
      consent,
    });

    return id;
  };

  return execute;
};

export default createNewSubscriptionUseCase;
