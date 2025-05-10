import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { Id } from "./_generated/dataModel";

// Use the Arabic texts from the previous RoomForm.tsx
const texts_ar: { [key: number]: string[] } = {
      60: [
        "سافر خالد الي السوق واشترى بعض الفواكه الطازجة.",
        "في صباح مشمس، ذهب الاطفال الي الحديقة للعب.",
        "القراءة توسع مدارك الإنسان وتزيد من معرفته.",
        "القط يجلس بجانب النافذة يراقب العصافير.",
        "النجاح يحتاج الي صبر واجتهاد ومثابرة.",
      ],
      180: [
        "في احد الايام قرر سامي ان يبدا بتعلم البرمجة، فجلس امام الحاسوب وبدا بقراءة الدروس. بعد عدة ساعات من المحاولة، تمكن من كتابة اول برنامج بسيط له، وشعر بسعادة كبيرة عندما راى النتيجة تظهر على الشاشة.",
        "الطبيعة الخلابة في شمال المملكة تجذب الكثير من السياح سنوياً للاستمتاع بجمالها. الجبال الشاهقة والوديان الخضراء والانهار الجارية تشكل لوحة فنية رائعة تاسر القلوب وتبعث في النفس الراحة والطمانينة.",
        "كتابة النصوص بسرعة تتطلب تدريباً مستمراً على لوحة المفاتيح. يجب على المتسابق ان يركز جيداً ويتجنب الاخطاء الإملائية ليحقق افضل نتيجة ممكنة في اقل وقت.",
        "في المساء اجتمع الاصدقاء حول الطاولة وتبادلوا اطراف الحديث والضحك. تحدثوا عن مغامراتهم في المدرسة والرحلات التي قاموا بها في العطلات الصيفية.",
        "العمل الجماعي يحقق نتائج افضل من العمل الفردي في معظم الاحيان. عندما يتعاون الجميع ويشارك كل فرد بافكاره ومهاراته، يصبح الإنجاز اسهل واسرع واكثر إبداعاً.",
      ],
      300: [
        "في صباح يوم الجمعة، استيقظت العائلة مبكراً وذهبت في رحلة الي البحر. كان الجو لطيفاً والسماء صافية، فاستمتع الجميع بالسباحة وجمع الاصداف على الشاطئ. بعد ذلك تناولوا وجبة الإفطار معاً تحت ظل شجرة كبيرة، وتبادلوا الاحاديث والضحكات. في طريق العودة توقفوا عند بائع الفواكه واشتروا بعض التمر والرمان الطازج.",
        "احمد يحب قراءة الكتب التاريخية لانها تعطيه فكرة عن حضارات الشعوب القديمة وتطورها عبر الزمن. في إحدى الليالي قرا عن حضارة بابل وكيف كانت مركزاً للعلم والفن. استلهم من قصص العلماء القدماء وقرر ان يكتب مقالاً عن اهمية العلم في بناء المجتمعات.",
        "في المدرسة، شارك الطلاب في مسابقة للكتابة الإبداعية، حيث كتب كل طالب قصة قصيرة عن مغامرة خيالية. اختار سالم ان يكتب عن رحلة الي الفضاء، بينما فضلت نورة ان تكتب عن مغامرة في اعماق البحر. في نهاية اليوم، قرا الجميع قصصهم امام الفصل وصفق لهم المعلم بحرارة.",
        "الرياضة مهمة لصحة الجسم والعقل، لذلك يحرص الكثيرون على ممارسة التمارين يومياً. الجري في الصباح يمنح الإنسان نشاطاً وحيوية طوال اليوم، كما ان الالعاب الجماعية تعزز روح التعاون والمنافسة الشريفة بين الاصدقاء.",
        "في نهاية الاسبوع، يجتمع افراد العائلة حول مائدة الطعام ويتبادلون الاحاديث والضحكات. يتحدثون عن احداث الاسبوع، ويخططون للقيام بنزهة في الحديقة او زيارة الاقارب. هذه اللحظات العائلية تظل محفورة في الذاكرة وتمنح الجميع شعوراً بالدفء والانتماء.",
  ],
};

const sentences_en: { [key: number]: string[] } = {
  60: [
    "Khaled traveled to the market and bought some fresh fruits.",
    "On a sunny morning, the children went to the park to play.",
    "Reading broadens a person's horizons and increases their knowledge.",
    "The cat sits by the window watching the birds.",
    "Success requires patience, effort, and perseverance.",
  ],
  180: [
    "One day, Sami decided to start learning programming. He sat at the computer and began reading lessons. After several hours of trying, he managed to write his first simple program and felt very happy when he saw the result appear on the screen.",
    "The beautiful nature in the north of the kingdom attracts many tourists every year to enjoy its beauty. The towering mountains, green valleys, and flowing rivers form a magnificent painting that captivates hearts and brings peace and tranquility to the soul.",
    "Typing quickly requires constant training on the keyboard. The competitor must concentrate well and avoid spelling mistakes to achieve the best possible result in the shortest time.",
    "In the evening, the friends gathered around the table and exchanged conversations and laughter. They talked about their adventures at school and the trips they took during the summer holidays.",
    "Teamwork often achieves better results than individual work. When everyone cooperates and each person contributes their ideas and skills, achievements become easier, faster, and more creative.",
  ],
  300: [
    "On Friday morning, the family woke up early and went on a trip to the beach. The weather was pleasant and the sky was clear, so everyone enjoyed swimming and collecting shells on the shore. After that, they had breakfast together under the shade of a big tree and exchanged conversations and laughter. On the way back, they stopped at a fruit vendor and bought some fresh dates and pomegranates.",
    "Ahmed loves reading history books because they give him an idea about the civilizations of ancient peoples and how they developed over time. One night, he read about the Babylonian civilization and how it was a center of science and art. He was inspired by the stories of ancient scientists and decided to write an article about the importance of knowledge in building societies.",
    "At school, the students participated in a creative writing competition, where each student wrote a short story about an imaginary adventure. Salem chose to write about a journey to space, while Nora preferred to write about an adventure in the depths of the sea. At the end of the day, everyone read their stories in front of the class and the teacher applauded them warmly.",
    "Sports are important for both physical and mental health, so many people make sure to exercise daily. Running in the morning gives a person energy and vitality throughout the day, and team games enhance the spirit of cooperation and fair competition among friends.",
    "At the end of the week, family members gather around the dining table and exchange conversations and laughter. They talk about the week's events and plan to go on a picnic in the park or visit relatives. These family moments remain etched in memory and give everyone a sense of warmth and belonging.",
  ],
};

function pickRandomText(duration: number, lang: 'ar' | 'en'): string {
  const arr = lang === 'ar' ? texts_ar[duration] : sentences_en[duration];
  if (!arr || arr.length === 0) return "";
  return arr[Math.floor(Math.random() * arr.length)];
}

export const createRoom = mutation({
  args: {
    sessionId: v.string(),
    name: v.string(),
    duration: v.number(),
    lang: v.string(),
  },
  handler: async (ctx, args) => {
    // Generate a random 4-letter code
    const code = Math.random().toString(36).substring(2, 6).toUpperCase();

    // Pick a random text for the selected duration and language
    const text = pickRandomText(args.duration, args.lang as 'ar' | 'en');

    // Create the room
    const roomId = await ctx.db.insert("rooms", {
      code,
      status: "lobby",
      duration: args.duration,
      text,
      hostId: args.sessionId,
      lang: args.lang,
    });

    // Create the player (as host)
    const playerId = await ctx.db.insert("players", {
      roomId,
      sessionId: args.sessionId,
      name: args.name,
      isHost: true,
      joinedAt: Date.now(),
    });

    return { code, roomId, playerId };
  },
});

export const joinRoom = mutation({
  args: {
    code: v.string(),
    sessionId: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    // Find the room
    const room = await ctx.db
      .query("rooms")
      .filter((q) => q.eq(q.field("code"), args.code.toUpperCase()))
      .unique();

    if (!room) {
      throw new Error("Room not found");
    }

    // Check if player already exists
    const existingPlayer = await ctx.db
      .query("players")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), room._id),
          q.eq(q.field("sessionId"), args.sessionId)
        )
      )
      .unique();

    if (existingPlayer) {
      return { roomId: room._id, playerId: existingPlayer._id };
    }

    // Create new player
    const playerId = await ctx.db.insert("players", {
      roomId: room._id,
      sessionId: args.sessionId,
      name: args.name,
      isHost: false,
      joinedAt: Date.now(),
    });

    // If game is in progress, initialize their progress
    if (room.status === "in_progress") {
      await ctx.db.insert("progress", {
        roomId: room._id,
        playerId,
        currentWord: 0,
        input: "",
        lastUpdate: Date.now(),
      });
    }

    return { roomId: room._id, playerId };
  },
});

export const startGame = mutation({
  args: {
    roomId: v.id("rooms"),
    sessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const room = await ctx.db.get(args.roomId);
    if (!room) {
      throw new Error("Room not found");
    }

    // Verify host
    const player = await ctx.db
      .query("players")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), args.roomId),
          q.eq(q.field("sessionId"), args.sessionId)
        )
      )
      .unique();

    if (!player?.isHost) {
      throw new Error("Only the host can start the game");
    }

    if (room.status !== "lobby") {
      throw new Error("Game already started");
    }

    // Set countdown state
    await ctx.db.patch(args.roomId, {
      status: "countdown",
      startTime: Date.now() + 3000, // 3 second countdown
    });

    // Initialize progress for all players
    const players = await ctx.db
      .query("players")
      .filter((q) => q.eq(q.field("roomId"), args.roomId))
      .collect();

    for (const player of players) {
      await ctx.db.insert("progress", {
        roomId: args.roomId,
        playerId: player._id,
        currentWord: 0,
        input: "",
        lastUpdate: Date.now(),
      });
    }
  },
});

export const setInProgress = mutation({
  args: {
    roomId: v.id("rooms"),
  },
  handler: async (ctx, args) => {
    const room = await ctx.db.get(args.roomId);
    if (!room) {
      throw new Error("Room not found");
    }

    if (room.status !== "countdown") {
      throw new Error("Not in countdown");
    }

    await ctx.db.patch(args.roomId, {
      status: "in_progress",
      endTime: Date.now() + room.duration * 1000,
    });
  },
});

export const finishGame = mutation({
  args: {
    roomId: v.id("rooms"),
  },
  handler: async (ctx, args) => {
    const room = await ctx.db.get(args.roomId);
    if (!room) {
      throw new Error("Room not found");
    }

    // Only update if the game is in progress
    if (room.status === "in_progress") {
      await ctx.db.patch(args.roomId, {
        status: "finished",
      });
    }
  },
});

export const restartGame = mutation({
  args: {
    roomId: v.id("rooms"),
    sessionId: v.string(),
  },
  handler: async (ctx, args) => {
    const room = await ctx.db.get(args.roomId);
    if (!room) {
      throw new Error("Room not found");
    }

    // Verify host
    const player = await ctx.db
      .query("players")
      .filter((q) =>
        q.and(
          q.eq(q.field("roomId"), args.roomId),
          q.eq(q.field("sessionId"), args.sessionId)
        )
      )
      .unique();

    if (!player?.isHost) {
      throw new Error("Only the host can restart the game");
    }

    if (room.status !== "finished") {
      throw new Error("Game not finished");
    }

    // Delete all progress
    const progress = await ctx.db
      .query("progress")
      .filter((q) => q.eq(q.field("roomId"), args.roomId))
      .collect();

    for (const p of progress) {
      await ctx.db.delete(p._id);
    }

    // Reset room to lobby
    await ctx.db.patch(args.roomId, {
      status: "lobby",
      startTime: undefined,
      endTime: undefined,
    });

    // Reset player finish times
    const players = await ctx.db
      .query("players")
      .filter((q) => q.eq(q.field("roomId"), args.roomId))
      .collect();

    for (const p of players) {
      await ctx.db.patch(p._id, {
        finishedAt: undefined,
      });
    }
  },
});

export const getRoom = query({
  args: {
    code: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("rooms")
      .filter((q) => q.eq(q.field("code"), args.code.toUpperCase()))
      .unique();
  },
});

export const listPlayers = query({
  args: {
    roomId: v.id("rooms"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("players")
      .filter((q) => q.eq(q.field("roomId"), args.roomId))
      .collect();
  },
});
