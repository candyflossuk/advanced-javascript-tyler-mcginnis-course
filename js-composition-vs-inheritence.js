/*
  JS Composition vs Inheritence
*/

// Extends uses Inheritence
/*
  Animal
    name
    energy
    eat()
    sleep()
    play()

    Dog
      breed
      bark()

    Cat
      declawed
      meow()
*/

/*
  Reduces code duplication, can be updated to be implement users,
  simply with a users class. What if users demand the same features
  like eat, sleep and play. But you cant get to them without
  the User being a 'Animal'

  We could pull the functionallity into a 'god' object, but thats
  not ideal either. This shows off the biggest weakness of inheritence.
  Where we model our classes around what things 'are' - a user today
  will be different to a user tomorrow. Class structure will change,
  and the tightly coupled nature of our application will rear its
  ugly head on us!

  [QUOTE]
    The problem with oo languages is they've got
    all this implicit environment that they carry around with them.
    You want a bannana but what you got was a gorilla holding the bannana
    and the entire jungle - John Armstrong
  [END QUOTE]

  We want the same functionallity of inheritence without the downside.
  Think of what things do instead of what they are.

  i.e
  A dog is a sleeper, barker, eater etc

  Instead of having methods coupled to a class ,and as sepearate Functions,
  We can compose objects made up of these functions.

  How to use the object (i.e this) in the function.
  Parse the object into the function. Instead of operating on instance
  we operate on the state.

  Invocations return methods - that when called will modify the specific object.
  Create instance
  Object.assign, merge state with what dog should do (not what it is).

  Composition makes our code easier to extend in future

  "By favouring composition over inheritence and thinking in terms of what things
  do rather than what things are, you free yourself of fragile and tightly coupled inheritence structures"


*/
