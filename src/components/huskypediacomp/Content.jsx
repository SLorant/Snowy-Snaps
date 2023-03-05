import React from 'react'
import BulbIcon from '../../assets/icons/BulbIcon'
import NotesIcon from '../../assets/icons/NotesIcon'

const Content = () => {
  return (
    <div
      id="spec"
      className="mx-10 mt-8 flex-col items-center justify-start text-justify font-body
       leading-tight text-blue dark:text-cream md:mx-20 md:text-lg md:leading-normal">
      <p className="italic">
        {' '}
        Welcome to HuskyPedia! Please note that while I have done my best to provide accurate and up-to-date
        information, I am not an expert in the field. This is a hobby project and should be used for informational
        purposes only. If you are considering getting a husky or are a current owner, I strongly recommend consulting a
        professional trainer or veterinarian for personalized advice. Additionally, please take the time to check out
        the sources, as they contain more detailed and reliable information on the topic. Thanks for visiting!
      </p>
      <h2 className=" mt-4 text-center font-header text-3xl text-blue dark:text-cream md:text-4xl">Characteristics</h2>
      <img className="mt-4 w-full rounded-md" src="src/assets/illustrations/huskyjump.png" alt="spec" />
      <div className=" mt-6 text-justify">
        {' '}
        The Siberian Husky is a large dog breed, with an average height of 51-60 cm. They typically weigh between 16-27
        kg. With proper care and attention, a husky can live for over 10 years.
        <div className="mb-4" /> The females are thinner without any fragility of structure, while the males are strong
        but never coarse looking. In good condition, the Siberian Husky has strong, well-developed muscles, and is not
        (and cannot be!) overweight.
        <div className="mb-4" />
        The Siberian Husky is a subtype of the Husky dog breed and belongs to the Spitz genetic subfamily. They were
        transported to Alaska in 1909 and are Siberian natives. Northeast Asian Chukchi people developed this breed as
        an endurance sled dog.
        <div className="mb-4" /> They have a thick double coat that reflects heat in the summer and shields them from
        the icy Arctic winter. They can have a variety of coat colors and patterns, but typically have white paws, legs,
        facial markings, and tail tips. Black and white coats are the most prevalent. Their almond-shaped eyes can have
        the following colors: brown, blue, or black. Sometimes, each of their eyes may be a distinct color.
        <div id="pers" className="mb-4" />
        These dogs have a higher risk of developing specific hereditary conditions like seizures and eye abnormalities.
        It's crucial that you keep up with your pet's vaccination and deworming schedules and take them in for routine
        checks at the vet. In order to catch any pathologies early on, we must also take them to the vet for routine
        checkups every 6 to 12 months.
      </div>
      <h2 className=" mt-6 text-center font-header text-3xl text-blue dark:text-cream md:text-4xl">Personality</h2>
      <img className="mt-4 w-full rounded-md" src="src/assets/illustrations/huskygirl.png" alt="spec" />
      <div className="mt-6 text-justify">
        Siberian Huskies are energetic, clever canines that are constantly moving about. One of the quickest sled dog
        breeds, they are renowned for their endurance and ability to run for extended periods of time.
        <div className="mb-4" />
        Huskies are the perfect walking companion if you enjoy climbing snow-covered mountains due to the fact that they
        were bred for very cold climates. Because of their high intelligence and reputation for mischief, they are best
        suited for experienced owners who can handle their demanding training and exercise requirements.
        <div className="mb-4" />
        Because Huskies are pack animals, they require an owner who is the undisputed leader. This makes training easier
        because your dog will respect you, but don't be surprised if he occasionally pushes the boundaries of your
        authority among the pack. It's crucial to resist their pushiness when this occurs. Establish your authority by
        reiterating the ground rules in a clear and consistent manner rather than by intimidating or beating.
        <div className="mb-4" />
        <div className="mb-4 flex items-center rounded-md  bg-sand text-left dark:bg-blue md:mx-8 ">
          <BulbIcon className="huskypediaicon float-left mx-2 mb-2  w-full   grow sm:w-1/2" />
          <p className="my-3 mr-4 shrink leading-tight">
            One of the easiest methods to establish your authority is to make your dog wait to eat. The Husky will
            consider you to be the guardian of all valuable possessions, including food, treats, toys, and other canine
            belongings.
          </p>
        </div>
        When bored or not given enough exercise, this high-energy breed may be destructive both inside and outside.
        Nevertheless, due to their cheeky and playful attitude, they may be rather endearing. They are sociable and will
        want to greet everyone they encounter, and they enjoy interacting with others and bragging about their skills.
        <div id="care" className="mb-4" />
        The good news is that Siberian Huskies don't bark. The bad news is that they adore howling, which can be
        extremely annoying for your neighbors.They are not the best pets for apartments unless you have one that is
        well-trained and exercised.{' '}
      </div>
      <h2 className=" mt-4 text-center font-header text-3xl text-blue dark:text-cream md:text-4xl">
        How to care for a husky
      </h2>
      <img id="feed" className="mt-4 w-full rounded-md" src="src/assets/illustrations/huskyeating.png" alt="spec" />
      <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Feeding</h3>
      <div className="mt-4 text-justify">
        Feed a high-quality diet devoid of artificial additives. Due to their size, your Husky might consume more than
        you anticipate, which could result in unexpectedly high food costs. <div className="mb-4" />A husky adult ought
        to eat twice daily. However, puppies will initially require more frequent feedings. Feed your puppy three meals
        per day, then beginning at three months of age, two meals per day. Treats shouldn't be more than 10% of their
        total daily calorie intake as this can throw their diet out of balance. <div className="mb-4" />
        <div className="mb-4 flex items-center rounded-md  bg-sand text-left dark:bg-blue md:mx-8 ">
          <NotesIcon className="huskypediaicon float-left mx-2  w-2/3  grow  sm:w-1/3" />
          <p className="my-3 mr-4 shrink leading-tight">
            To help your dog establish a routine, try feeding them at the same time each day. At any age, never let your
            husky "free feed."
          </p>
        </div>
        Following a dog's natural diet is advised. The main components of a natural canine diet are meat-based protein
        and essential fatty acids. Whole chickens, lamb, beef, and fish are a few examples.
        <div id="groom" className="mb-4" />
        As dogs thrive on meat, carbohydrate intake should be kept to a minimum. Professionals advise using sweet
        potatoes and whole grains in small amounts when preparing food for your dog. Last but not least, you can give
        your dog some fruits and vegetables that are rich in vitamins and minerals to improve their general health.
        <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Grooming</h3>
        <div className="mt-4 text-justify">
          Siberian Huskies are tidy dogs who will spend the time to groom themselves, just like cats do. They rarely
          require baths and don't typically emit a "doggy" odor, unless of course they find something repulsive to
          wiggle in the backyard or a body of water to jump in. When it's time to give your dog a bath, choose a
          high-quality dog shampoo that is made to preserve the natural oils in their skin and coat.{' '}
          <div className="mb-4" />
          When they blow their coats in the spring and fall, expect a lot of hair and shedding. Nevertheless, this breed
          is relatively simple to maintain. If you make an effort to brushing your dog's coat at least once a week
          throughout the year and every day during shedding season, you can prevent matting and excess hair on your
          furniture. <div className="mb-4" />
          In order to get rid of tartar buildup and the bacteria that lurk inside it, brush your Husky's teeth at least
          twice or three times per week. If you want to avoid bad breath and gum disease, brushing every day is even
          better.
          <div className="mb-4" />
          If your dog doesn't wear his nails down naturally, trim them once or twice a month to avoid painful tears and
          other issues.
          <div className="mb-4" />
          <div className="mb-4 flex items-center rounded-md  bg-sand text-left dark:bg-blue md:mx-8 ">
            <BulbIcon className="huskypediaicon float-left mx-2 mb-2  w-full   grow sm:w-1/2" />
            <p className="my-3 mr-4 shrink leading-tight">
              They are too long if you can hear them clicking on the floor. Cutting them too short can result in
              bleeding, which may make your dog uncooperative the next time the nail clippers are pulled out.
            </p>
          </div>
          Every week, you should check his ears for redness or an unpleasant smell that could be an infection. To help
          prevent infections, clean your dog's ears when you check them with a cotton ball dampened mild, pH-balanced
          ear cleaner. Simply clean the outer ear; avoid inserting anything into the ear canal.
        </div>
        <img id="env" className="mt-4 w-full rounded-md" src="src/assets/illustrations/huskyfence.png" alt="spec" />
        <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Environment and children</h3>
        <div className="mt-4 text-justify">
          When adopting a dog, we must give them a secure setting where they can play and unwind. A medium-sized dog
          like a Siberian Husky requires appropriate space and activity. <div className="mb-4" />
          Allowing your dog to sleep in your bed will confuse it about its place in the family. When the dog reaches an
          older age, you might occasionally make an exception. Make sure to provide them with a sizable, cozy dog bed so
          they can stretch out, roll over, and of course sleep.
          <div className="mb-4" />
          Making sure the environment is "dog-friendly". This means that your dog cannot access anything that could be
          harmful. They can choose any object to play with, regardless of its nature or intended use.
          <div className="mb-4" />
          Make your house and yard escape-proof. Huskies are the escape artists of the dog world. To make it difficult
          for them to flee, you'll need to make preparations for this in your home.
          <div className="mb-4" />
          <div className="mb-4 flex items-center rounded-md  bg-sand text-left dark:bg-blue md:mx-8 ">
            <NotesIcon className="huskypediaicon float-left mx-2 mb-1  w-full grow  sm:w-1/3" />
            <p className="my-3 mr-4 shrink leading-tight">
              Even if they have been introduced to each other when they were young, huskies have such a high prey drive
              that we don't advise keeping them with smaller pets.
            </p>
          </div>
          <div className="mb-4" />
          Your Husky will enjoy being around children as long as they have been properly socialized. But because of
          their size and power, we wouldn't advise getting a Husky if you have smaller kids because they might
          accidentally knock them over. They are better for households without children or with teenagers.{' '}
          <div className="mb-4" />
          Always educate kids on how to deal with dogs, and watch over any interactions between small kids and dogs to
          avoid any biting or tugging of ears or tails from either party. Teach your youngster to never try to steal a
          dog's food or approach a dog while he or she is eating. There should never be a dog left alone with a child.
        </div>
        <img id="puppy" className="mt-4 w-full rounded-md" src="src/assets/illustrations/huskyboy.png" alt="spec" />
        <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Puppies</h3>
        <div className="mt-4 text-justify">
          We need to be extra cautious when raising Siberian Husky puppies, especially during the weaning process. Do
          not overfeed puppies and follow a natural diet for them. After they have finished eating, you should 10
          minutes before removing any leftover food.
          <div className="mb-4" />
          <div className="mb-4 flex items-center rounded-md  bg-sand text-left dark:bg-blue md:mx-8 ">
            <NotesIcon className="huskypediaicon float-left mx-2 mb-1  w-2/3 grow  sm:w-1/3" />
            <p className="my-3 mr-4 shrink leading-tight">
              Try to stay away from any overly processed foods. This includes dog treats, which can be seriously
              detrimental to a puppy's health.
            </p>
          </div>
          <div className="mb-4" />
          Don't neglect the feet of your puppy. You should keep their nails cut and trim any long hairs on their feet.
          Check your puppy's eyes. Given the Siberian husky's propensity for eye issues, it's crucial to have your
          puppy's eyes examined as early as possible.
          <div className="mb-4" />
          Exercise your pet frequently. Siberian husky puppies require a lot of exercise due to their energetic
          personalities. You must make sure it exercises effectively for 30 to 60 minutes each day.{' '}
          <div className="mb-4" />
          Introduce different animals and people to your dog. A husky puppy will need socialization to become
          comfortable around people and other animals, just like any other dog. <div className="mb-4" />
          Due to their high dependence on their human companion and the need to settle into their new home, puppies
          require different sleeping arrangements than adult dogs. <div className="mb-4" id="exr" />
          When taking care of a puppy, you should start teaching them simple commands or habits, such as paper training.
          Professional training sessions may be a smart choice if your puppy appears uneasy or wary of other pets or
          people. These training sessions teach your dog how to behave among others.
        </div>
      </div>
      <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Exercise</h3>
      <div className="mt-4 text-justify">
        <div className="mb-4" />
        All dogs need playtime, but for a breed as energetic as the Siberian Husky, this requirement is even more
        important. Therefore, we must give our Husky dogs a ton of toys to keep them occupied and take them on lengthy
        walks. Your Husky needs to exercise for at least two hours every day.
        <div className="mb-4" />
        <div className="mb-4 flex items-center rounded-md  bg-sand text-left dark:bg-blue md:mx-8 ">
          <BulbIcon className="huskypediaicon float-left mx-2 mb-1 w-full grow   sm:w-1/2" />
          <p className="my-3 mr-4 shrink leading-tight">
            To prevent them from getting bored, it's a good idea to space this out throughout the day and to change up
            your walking routes. The ideal scenario would also involve off-lead exercise in a safe environment.
          </p>
        </div>{' '}
        <div className="mb-4" id="train" />
        Because Huskies have such thick coats, they can quickly overheat in the summer. Watch them closely for symptoms
        of heat exhaustion and try to avoid exercising while it's hot outside.
      </div>
      <h2 className=" mt-4 text-center font-header text-3xl text-blue dark:text-cream md:text-4xl">Training a husky</h2>
      <img className="mt-4 w-full rounded-md" src="src/assets/illustrations/huskyreading.png" alt="spec" />
      <div className="mt-4 text-justify">
        Despite their high intelligence, huskies have autonomous minds and require constant, reward-based teaching
        throughout their whole lives. Avoid yelling at or punishing your dog because doing so will seriously undermine
        their training and damage your relationship. <div className="mb-4" />
        Clearly define your boundaries, huskies are notoriously stubborn, so it's critical to establish limits as soon
        as possible.
        <div className="mb-4" id="potty" />
        You should train them with positive reinforcement. By doing things this way, you'll strengthen your relationship
        with your dog and prevent any trauma from punishments. Siberian Huskies are intelligent working dogs, which
        makes training them simpler for us.
        <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Potty</h3>
        <div className="mt-4 text-justify">
          To avoid accidents, watch your puppy closely when it is indoors. Constricting the dog to a specific area of
          your house makes this process easier. Make a loud noise and yell "no!" if you see your dog urinating or
          defecating indoors, then immediately take the dog outside.
          <div className="mb-4" />A puppy will require more trips to the potty than an older dog. Take the puppy outside
          as frequently as you can and on a regular basis to reduce the possibility of interior accidents.
          <div className="mb-4" id="crate" />
          <div className=" mb-4 flex items-center rounded-md  bg-sand text-left dark:bg-blue md:mx-8 ">
            <BulbIcon className="huskypediaicon float-left mx-2 mb-1  w-full   grow sm:w-1/2" />
            <p className="my-3 mr-4 shrink leading-tight">
              When your dog relieves itself outside, reward it with a tiny treat and give it a pat on the head. This
              will encourage the habit and help the puppy understand where it should do its business.
            </p>
          </div>{' '}
        </div>
        <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Crate</h3>
        <div className="mt-4 text-justify">
          Crate training is a great strategy to prevent damage to your house from huskies while your husky. Put your dog
          in its box with a treat or some kibble and a chew toy when you can't watch over it. The dog will eventually
          grow to appreciate being there and may even retreat there in times of stress.
          <div className="mb-4" />
          The simplest way to begin crate training your dog is to place a goodie inside the crate without shutting the
          door. You can try closing the door for brief intervals of time after a day or so of doing this repeatedly.
          Then your dog can progress to spending longer times in the crate.
          <div className="mb-4" />
          If you want to properly crate train your dog, never use the crate as a form of punishment.
        </div>
        <img id="leash" className="mt-4 w-full rounded-md" src="src/assets/illustrations/huskyleash.png" alt="spec" />
        <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Leash</h3>
        <div className="mt-4 text-justify">
          You must train your husky to be cooperative when walking on a leash due to their desire to run off.{' '}
          <div className="mb-4" />
          If not on a leash, huskies can easily get lost. Put a collar on your dog while it is eating to help it become
          acclimated to it. The dog will grow accustomed to the collar and may even form pleasant associations with it.
          <div className="mb-4" id="clicker" />
          Start off by simply taking it for breef walks around the home, rewarding it with treats anytime it stays by
          your side and doesn't pull on the leash. When you've mastered that, try it outside! <div className="mb-4" />
          Additionally, you'll need to maintain a tight hold on their lead when you're out and about in case they pick
          up on the scent of something they might want to chase.{' '}
        </div>
        <h3 className=" mt-6 font-header text-2xl text-blue dark:text-cream md:text-3xl">Clicker</h3>
        <div className="mt-4 text-justify">
          Use a clicker to practice. Huskies can be trained with the clicker, much as other puppies, to learn orders and
          obey.
          <div className="mb-4" />
          With clicker training, you reward your dog every time it complies with an instruction by clicking the clicker
          and giving it a treat. Your dog learns more rapidly what you want it to perform when the sound is combined
          with a reward. <div className="mb-4" id="sources" />
          Initially, work on getting your dog to connect clicking with treats. Simply click at random intervals and then
          give a reward right away.
        </div>
        <h2 className=" mt-4 text-center font-header text-3xl text-blue dark:text-cream md:text-4xl">Sources</h2>
        <div className="mt-4">
          Here are the sources I used to create Huskypedia. Be sure to check them out!
          <div className="mb-4"></div>
          <a
            className="text-peach underline"
            href="https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/puppies-dogs/large-dogs/siberian-husky">
            The People's Dispensary for Sick Animals (PDSA)
          </a>
          <div className="mb-4" />
          <a
            className="text-peach underline"
            href=" https://www.wikihow.com/Train-and-Care-for-Your-New-Siberian-Husky-Puppy">
            WikiHow
          </a>
          <div className="mb-4" />
          <a
            className="text-peach underline"
            href=" https://www.animalwised.com/how-to-take-care-of-a-siberian-husky-3485.html">
            AnimalWised
          </a>
          <div className="mb-4" />
          <a className="text-peach underline" href="https://dogtime.com/dog-breeds/siberian-husky#/slide/1">
            Dogtime
          </a>
          <div className="mb-12" />
        </div>
      </div>
    </div>
  )
}

export default Content
