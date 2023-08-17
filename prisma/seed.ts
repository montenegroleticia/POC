import prisma from "../src/Database";

async function main() {
  let workoutsList = await prisma.workouts.findMany();

  if (workoutsList.length === 0) {
    let workoutCreated = await prisma.workouts.create({
      data: {
        type: "Strength",
        name: "Push-ups",
        description: "Do 3 sets of 15 push-ups.",
      },
    });
    console.log(workoutCreated);
  } else {
    console.log("Workouts already exist.");
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
