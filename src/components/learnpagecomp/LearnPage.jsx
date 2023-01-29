import React from 'react'
import { Link } from 'react-router-dom'

const LearnPage = () => {
  return (
    <div className=" h-full w-full bg-cream">
      <div className=" flex  w-full flex-col items-center justify-center  bg-cream md:mt-16 ">
        <h1 className=" mb-6 mt-14 font-header text-3xl  text-blue xl:text-5xl">Huskypedia</h1>
        <div className="fixed top-60 left-40 flex h-[500px] w-80 flex-col items-center justify-center rounded-md bg-white">
          <h2 className=" font-headersc text-3xl text-blue">Table of contents</h2>
          <ul className="mt-4 flex flex-col gap-2 font-header text-xl text-blue">
            <li>Specifications</li>
            <li>Personality</li>
            <li>Husky care</li>
            <ul>
              <li className="ml-5 text-base">
                <Link to=""> Food</Link>
              </li>
              <li className="ml-5 text-base">Grooming</li>
              <li className="ml-5 text-base">Environment and children</li>
              <li className="ml-5 text-base">Other pets and training</li>
              <li className="ml-5  text-base">Puppies</li>
            </ul>
            <li>Training a husky</li>
            <ul>
              <li className="ml-5 text-base">Potty</li>
              <li className="ml-5 text-base">Crate</li>
              <li className="ml-5 text-base">Leash</li>
              <li className="ml-5 mb-2 text-base">Clicker</li>
            </ul>
          </ul>
        </div>
        <div className="mt-12 flex h-full w-5/12 flex-col items-center justify-start rounded-md bg-white">
          <h2 className=" mt-6 font-header text-4xl text-peach">Introduction</h2>
          <div className="mx-20 mt-4 flex-col items-center justify-start text-justify font-body text-lg text-blue">
            {' '}
            Welcome to HuskyPedia! Please note that while I have done my best to provide accurate
            and up-to-date information, I am not an expert in the field. This is a hobby project and
            should be used for informational purposes only. If you are considering getting a husky
            or are a current owner, I strongly recommend consulting a professional trainer or
            veterinarian for personalized advice. Additionally, please take the time to check out
            the sources, as they contain more detailed and reliable information on the topic. Thanks
            for visiting!
            <h2 className=" mt-4 text-center font-header text-4xl text-peach">
              Husky Specifications
            </h2>
            <img className="mt-4 w-full rounded-md" src="src/assets/husky2wide.jpg" alt="spec" />
            <p className=" mt-6 text-justify">
              {' '}
              The husky is a large dog breed, with an average height of 51-60 cm. They typically
              weigh between 16-27 kg. With proper care and attention, a husky can live for over 10
              years.
              <br className="mb-4" /> The females are thinner without any fragility of structure,
              while the males are strong but never coarse looking. In good condition, the Siberian
              Husky has strong, well-developed muscles, and is not (and cannot be!) overweight.
              <br className="mb-4" />
              The Siberian Husky is a subtype of the Husky dog breed and belongs to the Spitz
              genetic subfamily. They were transported to Alaska in 1909 and are Siberian natives.
              Northeast Asian Chukchi people developed this breed as an endurance sled dog.
              <br className="mb-4" /> They have a thick double coat that reflects heat in the summer
              and shields them from the icy Arctic winter. They can have a variety of coat colors
              and patterns, but typically have white paws, legs, facial markings, and tail tips.
              Black and white coats are the most prevalent. Their almond-shaped eyes can have the
              following colors: brown, blue, or black. Sometimes, each of their eyes may be a
              distinct color.
              <br className="mb-4" />
              These dogs have a higher risk of developing specific hereditary conditions like
              seizures and eye abnormalities. It's crucial that you keep up with your pet's
              vaccination and deworming schedules and take them in for routine checks at the vet. In
              order to catch any pathologies early on, we must also take them to the vet for routine
              checkups every 6 to 12 months.
            </p>
            <h2 className=" mt-6 text-center font-header text-4xl text-peach">Personality</h2>
            <img className="mt-4 w-full rounded-md" src="src/assets/husky2wide.jpg" alt="spec" />
            <div className="mt-6 text-justify">
              Siberian Huskies are energetic, clever canines that are constantly moving about. One
              of the quickest sled dog breeds, they are renowned for their endurance and ability to
              run for extended periods of time.
              <br className="mb-4" />
              Huskies are the perfect walking companion if you enjoy climbing snow-covered mountains
              due to the fact that they were bred for very cold climates. Because of their high
              intelligence and reputation for mischief, they are best suited for experienced owners
              who can handle their demanding training and exercise requirements.
              <br className="mb-4" />
              Because Huskies are pack animals, they require an owner who is the undisputed leader.
              This makes training easier because your dog will respect you, but don't be surprised
              if he occasionally pushes the boundaries of your authority among the pack. It's
              crucial to resist their pushiness when this occurs. Establish your authority by
              reiterating the ground rules in a clear and consistent manner rather than by
              intimidating or beating.
              <br className="mb-4" />
              <div className="mx-8 mb-4 flex items-center  rounded-md bg-sand text-left ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bulb float-left mx-2 mb-2  w-1/3  grow"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                  <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                  <line x1="9.7" y1="17" x2="14.3" y2="17" />
                </svg>
                <p className="my-3 mr-2 shrink leading-tight">
                  One of the easiest methods to establish your authority is to make your dog wait to
                  eat. The Husky will consider you to be the guardian of all valuable possessions,
                  including food, treats, toys, and other canine belongings.
                </p>
              </div>
              When bored or not given enough exercise, this high-energy breed may be destructive
              both inside and outside. Nevertheless, due to their cheeky and playful attitude, they
              may be rather endearing. They are sociable and will want to greet everyone they
              encounter, and they enjoy interacting with others and bragging about their skills.
              <br className="mb-4" />
              The good news is that Siberian Huskies don't bark. The bad news is that they adore
              howling, which can be extremely annoying for your neighbors.They are not the best pets
              for apartments unless you have one that is well-trained and exercised.{' '}
            </div>
            <h2 className=" mt-4 text-center font-header text-4xl text-peach">
              How to care for a husky
            </h2>
            <img className="mt-4 w-full rounded-md" src="src/assets/husky2wide.jpg" alt="spec" />
            <h3 className=" mt-6 font-header text-3xl text-blue">Feeding</h3>
            <div className="mt-4 text-justify">
              Feed a high-quality diet devoid of artificial additives. Due to their size, your Husky
              might consume more than you anticipate, which could result in unexpectedly high food
              costs. <br className="mb-4" />
              A husky adult ought to eat twice daily. However, puppies will initially require more
              frequent feedings. Feed your puppy three meals per day, then beginning at three months
              of age, two meals per day. Treats shouldn't be more than 10% of their total daily
              calorie intake as this can throw their diet out of balance. <br className="mb-4" />
              <div className="mx-8 mb-4 flex items-center  rounded-md bg-sand text-left ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-notes float-left mx-2 mb-2  w-1/3  grow"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <line x1="9" y1="7" x2="15" y2="7" />
                  <line x1="9" y1="11" x2="15" y2="11" />
                  <line x1="9" y1="15" x2="13" y2="15" />
                </svg>
                <p className="my-3 mr-2 shrink leading-tight">
                  To help your dog establish a routine, try feeding them at the same time each day.
                  At any age, never let your husky "free feed."
                </p>
              </div>
              Following a dog's natural diet is advised. The main components of a natural canine
              diet are meat-based protein and essential fatty acids. Whole chickens, lamb, beef, and
              fish are a few examples.
              <br className="mb-4" />
              As dogs thrive on meat, carbohydrate intake should be kept to a minimum. Professionals
              advise using sweet potatoes and whole grains in small amounts when preparing food for
              your dog. Last but not least, you can give your dog some fruits and vegetables that
              are rich in vitamins and minerals to improve their general health.
              <h3 className=" mt-6 font-header text-3xl text-blue">Grooming</h3>
              <p className="mt-4 text-justify">
                Siberian Huskies are tidy dogs who will spend the time to groom themselves, just
                like cats do. They rarely require baths and don't typically emit a "doggy" odor,
                unless of course they find something repulsive to wiggle in the backyard or a body
                of water to jump in. When it's time to give your dog a bath, choose a high-quality
                dog shampoo that is made to preserve the natural oils in their skin and coat.{' '}
                <br className="mb-4" />
                When they blow their coats in the spring and fall, expect a lot of hair and
                shedding. Nevertheless, this breed is relatively simple to maintain. If you make an
                effort to brushing your dog's coat at least once a week throughout the year and
                every day during shedding season, you can prevent matting and excess hair on your
                furniture. <br className="mb-4" />
                In order to get rid of tartar buildup and the bacteria that lurk inside it, brush
                your Husky's teeth at least twice or three times per week. If you want to avoid bad
                breath and gum disease, brushing every day is even better.
                <br className="mb-4" />
                If your dog doesn't wear his nails down naturally, trim them once or twice a month
                to avoid painful tears and other issues. They are too long if you can hear them
                BARNA clicking on the floor. Because dog toenails contain blood vessels, cutting
                them too short can result in bleeding, which may make your dog uncooperative the
                next time the nail clippers are pulled out.
                <br className="mb-4" />
                Every week, you should check his ears for redness or an unpleasant smell that could
                be an infection. To help prevent infections, clean your dog's ears when you check
                them with a cotton ball dampened mild, pH-balanced ear cleaner. Simply clean the
                outer ear; avoid inserting anything into the ear canal.
              </p>
              <h3 className=" mt-6 font-header text-3xl text-blue">Environment and children</h3>
              <p className="mt-4 text-justify">
                When adopting a dog, we must give them a secure setting where they can play and
                unwind. A medium-sized dog like a Siberian Husky requires appropriate space and
                activity. Make sure to provide them with a sizable, cozy dog bed so they can stretch
                out, roll over, and of course sleep. <br className="mb-4" />
                Making sure the environment is "dog-friendly". This means that your dog cannot
                access anything that could be harmful. They can choose any object to play with,
                regardless of its nature or intended use.
                <br className="mb-4" />
                Make your house and yard escape-proof. Huskies are the escape artists of the dog
                world. To make it difficult for them to flee, you'll need to make preparations for
                this in your home.
                <br className="mb-4" />
                Your Husky will enjoy being around children as long as they have been properly
                socialized. But because of their size and power, we wouldn't advise getting a Husky
                if you have smaller kids because they might accidentally knock them over. They are
                better for households without children or with teenagers. <br className="mb-4" />
                Always educate kids on how to deal with dogs, and watch over any interactions
                between small kids and dogs to avoid any biting or tugging of ears or tails from
                either party. Teach your youngster to never try to steal a dog's food or approach a
                dog while he or she is eating. There should never be a dog left alone with a child.
              </p>
              <h3 className=" mt-6 font-header text-3xl text-blue">Other pets and training</h3>
              <p className="mt-4 text-justify">
                For your Siberian Husky to keep a stable temperament as an adult dog, socializing
                them as a puppy is crucial. You should slowly acclimate them to new situations,
                things, and people in order to socialize them. Conflicts must be avoided at all
                costs since they might traumatize them and cause later behavioral problems.
                <br className="mb-4" />
                Even if they have been introduced when they were young, huskies have such a high
                prey drive that we don't advise keeping them with smaller pets. Additionally, you'll
                need to maintain a tight hold on their lead when you're out and about in case they
                pick up on the scent of something they might want to chase. <br className="mb-4" />
                Early socialization will have a significant influence on your dog's personality.
                Poor socialization is frequently the cause of undesirable behaviors such as biting,
                barking, and "resource guarding."
                <br className="mb-4" />
                All puppies require playtime, but for breeds as energetic as the Siberian Husky,
                this requirement is even more crucial. As a result, we must give our Husky dogs a
                ton of toys to keep them occupied and take them on lengthy walks. Siberian Huskies
                in adulthood require more than two hours of exercise every day.{' '}
                <br className="mb-4" />
                You should train them with positive reinforcement when it comes to training. By
                doing things this way, you'll strengthen your relationship with your dog and prevent
                any trauma from punishments. Siberian Huskies are intelligent working dogs, which
                makes training them simpler for us. <br className="mb-4" />
                For detailed description of training a Husky, check out the Training section!
              </p>
              <h3 className=" mt-6 font-header text-3xl text-blue">Puppies</h3>
              <p className="mt-4 text-justify">
                We must use additional caution when raising Siberian Husky puppies, especially
                during the weaning process. Do not overfeed puppies; instead, follow a natural diet
                for them. After they have finished eating, you can wait 10 minutes before removing
                any leftover food.
                <br className="mb-4" />
                It's crucial to regularly feed them new food and to maintain their bowl clean. We
                can prevent any potential illnesses this way. Try to stay away from any overly
                processed foods when it comes to their diet. This includes dog treats, which can be
                seriously detrimental to a puppy's health.
                <br className="mb-4" />
                Don't neglect the feet of your puppy. You should keep their nails cut and trim any
                long hairs on their feet. Check your puppy's eyes. Given the Siberian husky's
                propensity for eye issues, it's crucial to have your puppy's eyes examined as early
                as possible.
                <br className="mb-4" />
                Exercise your pet frequently. Siberian husky puppies require a lot of exercise due
                to their energetic personalities. You must make sure it exercises effectively for 30
                to 60 minutes each day. <br className="mb-4" />
                Introduce different animals and people to your dog. Huskies are friendly by nature.
                A husky puppy will need socialization to become comfortable around people and other
                animals, just like any other dog. Make sure to socialize your puppy with many people
                and other canines from an early age by taking it out into the world.{' '}
                <br className="mb-4" />
                Puppy socialization and training sessions may be a smart choice if your puppy
                appears uneasy or wary of other pets or people. These training sessions teach your
                dog how to behave among others. <br className="mb-4" /> Due to their high dependence
                on their human companion and the need to settle into their new home, puppies require
                different sleeping arrangements than adult dogsLast but not least, when taking care
                of a puppy, you should start teaching them simple commands or habits, such paper
                training.
              </p>
            </div>
            <h2 className=" mt-4 text-center font-header text-4xl text-peach">Training a husky</h2>
            <img className="mt-4 w-full rounded-md" src="src/assets/husky2wide.jpg" alt="spec" />
            <div className="mt-4 text-justify">
              Ideal owners for Siberian Huskies are those who are knowledgeable about the breed.
              Despite their high intelligence, they have autonomous minds and require constant,
              reward-based teaching throughout their whole lives. Avoid yelling at or punishing your
              dog because doing so will seriously undermine their training and damage your
              relationship. <br className="mb-4" />A least of two hours of exercise should be
              provided to your Husky each day. To prevent them from getting bored, we advise spacing
              this out throughout the day and changing up your walking routes. The ideal scenario
              would also involve off-lead exercise in a safe environment. In addition to training
              sessions, your Husky will require a lot of playtime with you and leisure time in the
              garden. <br className="mb-4" />
              Because Huskies have such thick coats, they can quickly overheat in the summer. Watch
              them closely for symptoms of heat exhaustion and try to avoid exercising while it's
              hot outside. The optimum times to go for lengthy walks and runs are generally in the
              early morning and late evening.
              <h3 className=" mt-6 font-header text-3xl text-blue">Fundamentals</h3>
              <p className="mt-4 text-justify">
                Clearly define your boundaries. Huskies are notoriously stubborn, so it's critical
                to establish limits as soon as possible. They must understand your authority.
                <br className="mb-4" />
                Allowing your dog to sleep in your bed will confuse it about its place in the
                family. When the dog reaches an older age, you might occasionally make an exception.
                Give the dog a handful of kibble from everyone in the house. Your husky learns from
                this that everyone in the house has the power to limit its access to food. Be
                consistent with every rule you establish.
                <br className="mb-4" />
                If you're not, the dog will discover that with enough effort, it sometimes succeeds
                in getting what it wants. Ensure that everyone else in the house understands the
                situation. Be tolerant. If you are firm and persistent, your dog can be trained.
                Because they are working dogs, huskies frequently appreciate training exercises.
              </p>
              <h3 className=" mt-6 font-header text-3xl text-blue">Potty</h3>
              <p className="mt-4 text-justify">
                Potty train your pet. Your Siberian husky will need to be housebroken, just like any
                new puppy. <br className="mb-4" />
                Watch your puppy. To avoid accidents, watch your puppy closely when it is indoors.
                Constricting the dog to a specific area of your house makes this process simpler.
                Make a loud noise and yell "no!" if you see your dog urinating or defecating
                indoors. Then immediately take the dog outside.
                <br className="mb-4" />
                Make several trips outside. A puppy will require more trips to the potty than an
                older dog. Take the puppy outside as frequently as you can and on a regular basis to
                reduce the possibility of interior accidents. <br className="mb-4" />
                Give praise for the desired behavior. When your dog relieves itself outside, reward
                it with a tiny treat and give it a pat on the head. This will encourage the habit
                and help it understand where it should do its business.
              </p>
              <h3 className=" mt-6 font-header text-3xl text-blue">Crate</h3>
              <p className="mt-4 text-justify">
                Train your puppy in crates. Crate training is a crucial step in potty training your
                dog. You should use this time to encourage your puppy to enjoy its time spent in its
                crate. Dogs won't want to mess up their own area.
                <br className="mb-4" />
                This is a great strategy to prevent damage to your house from huskies while you are
                away. Put your dog in its box with a treat or some kibble and a chew toy when you
                can't watch over it. The dog will eventually grow to appreciate being there and may
                even retreat there in times of stress. <br className="mb-4" />
                The simplest way to begin crate training your dog is to place a goodie inside the
                crate without shutting the door. You can try closing the door for brief intervals of
                time after doing this several times over the course of about a day. Then you can
                progress to spending longer times in the crate.
                <br className="mb-4" />
                If you want to properly crate train your dog, never use the crate as a form of
                punishment.
              </p>
              <h3 className=" mt-6 font-header text-3xl text-blue">Leash</h3>
              <p className="mt-4 text-justify">
                Your dog should be leash-trained. For huskies, leash training is also essential. You
                must train them to be cooperative when walking on a leash due to their desire to run
                off. <br className="mb-4" />
                If not on a leash, huskies can easily run off and get lost. Put a collar on your dog
                while it is eating to help it become acclimated to it. The dog will grow accustomed
                to the collar and may even form pleasant associations with it.
                <br className="mb-4" />
                Start off by simply taking it for brief walks around the home, rewarding it with
                goodies anytime it stays by your side and doesn't pull on the leash. When you've
                mastered that, try it outside!
              </p>
              <h3 className=" mt-6 font-header text-3xl text-blue">Clicker</h3>
              <p className="mt-4 text-justify">
                Use a clicker to practice. Huskies can be trained with the clicker, much as other
                puppies, to learn orders and obey.
                <br className="mb-4" />
                With clicker training, you reward your dog every time it complies with an
                instruction by clicking the clicker and giving it a treat. Your dog learns what you
                want it to perform more rapidly when the sound is combined with a reward.{' '}
                <br className="mb-4" />
                Initially, work on getting your dog to connect clicking with treats. Simply click at
                random intervals and then give a reward right away. Once your dog has mastered this
                association, you can begin rewarding desired behaviors with the clicker and treats.
              </p>
              <h2 className=" mt-4 text-center font-header text-4xl text-peach">Sources</h2>
              <p className="mt-4">
                Here are the sources I used to create Huskypedia:
                <br className="mb-2" />
                <a href="https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/puppies-dogs/large-dogs/siberian-husky">
                  https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/puppies-dogs/large-dogs/siberian-husky
                </a>
                <br className="mb-2" />
                <a href=" https://www.wikihow.com/Train-and-Care-for-Your-New-Siberian-Husky-Puppy">
                  https://www.wikihow.com/Train-and-Care-for-Your-New-Siberian-Husky-Puppy
                </a>
                <br className="mb-2" />
                <a href=" https://www.animalwised.com/how-to-take-care-of-a-siberian-husky-3485.html">
                  https://www.animalwised.com/how-to-take-care-of-a-siberian-husky-3485.html
                </a>
                <br className="mb-2" />
                <a href="https://dogtime.com/dog-breeds/siberian-husky#/slide/1">
                  https://dogtime.com/dog-breeds/siberian-husky#/slide/1
                </a>
                <br className="mb-8" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnPage
