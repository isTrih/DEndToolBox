import type StashHistory from "@/views/StashHistory.vue";

export default {
  common: {
    add: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    chooseLanguage: 'Language',
  },

  menu: {
    Home: 'Home',
    ChapterRewards2: 'Poe2 RewardsCheck',
    Stash: 'Guild Stash',
    StashHistory: 'Guild Stash History',
    VendorRegex:"Vendor Regex"
  },
  chapterRewards: {
    chapterRewards: 'Chapter Rewards',
    quest: 'Objective',
    reward: 'Rewards',
    isCompleted: 'isCompleted',
    area: 'Area',
    objective: 'Objective',
    Reward: 'Reward',
    clearAll: 'Clear All',
    isHide: 'Hide when complete',
  },
  Chapter: {
    Act1: 'Act1',
    Act2: 'Act2',
    Act3: 'Act3',
    CruelAct1: 'Act1(Cruel)',
    CruelAct2: 'Act2(Cruel)',
    CruelAct3: 'Act3(Cruel)',
  },
  Act1: [
    {
      area: 'Clearfell',
      objective: 'Kill Beira of the Rotten Pack',
      Reward: '+10% cold resistance',
    },
    {
      area: 'Hunting Grounds',
      objective: 'Kill The Crowbell',
      Reward: '+2 passive skill points',
    },
    {
      area: 'Freythorn',
      objective: 'Kill The King in the Mists',
      Reward: '+30 spirit',
    },
    {
      area: 'Ogham Farmlands',
      objective: "Find Una's Lute and deliver it to Una",
      Reward: '+2 passive skill points',
    },
    {
      area: 'Ogham Village',
      objective: "Finding Renly's Workshop and deliver it to Renly",
      Reward: 'Unlock Proper Forge',
    },
    {
      area: 'Ogham Manor',
      objective: 'Kill Candlemass, the Living Rite',
      Reward: '+20 maximum life',
    },
  ],
  Act2: [
    {
      area: 'Keth',
      objective: 'Kill Kabala, Constrictor Queen',
      Reward: '+2 passive skill points',
    },
    {
      area: 'Valley of the Titans',
      objective:
        'Deliver the Kabala Clan Relic and Sun Clan Relic to the altar and choose one of the two',
      Reward:
        'Choice of bonus: 30% increased Charm Charges gained or 15% increased Mana Recovery from Flasks',
    },
    {
      area: 'Deshar',
      objective: 'Find the Final Letter and deliver it to Shambrin',
      Reward: '+2 passive skill points',
    },
    {
      area: 'The Spires of Deshar',
      objective: 'Interact with the Sisters of Garukhan monument',
      Reward: '+10% lightning resistance',
    },
  ],
  Act3: [
    {
      area: 'Jungle Ruins',
      objective: 'Kill Mighty Silverfist',
      Reward: '+2 passive skill points',
    },
    {
      area: 'The Azak Bog',
      objective: 'Kill Ignagduk, The Bog Witch',
      Reward: '+30 spirit',
    },
    {
      area: 'The Venom Crypts',
      objective: 'Find the Venom Vial and deliver it to Servi',
      Reward:
        'Choose 1 of 3 permanent options:\n' +
        '(25% increased Stun Threshold / 30% increased Elemental Ailment Threshold / 25% increased Mana Regeneration Rate)',
    },
    {
      area: "Jiquani's Machinarium",
      objective: 'Kill Blackjaw, The Remnant',
      Reward: '+10% fire resistance',
    },
    {
      area: 'The Molten Vault',
      objective: 'Kill Mektul, the Forgemaster and talk to Oswald',
      Reward: 'unlock the Reforging Bench.',
    },
    {
      area: 'Aggorat',
      objective: 'Acquire Sacrificial Heart by killing enemies. Sacrifice it at the altar',
      Reward: '+2 passive skill points',
    },
  ],
  CruelAct1: [
    {
      area: 'Clearfell',
      objective: 'Kill Beira of the Rotten Pack',
      Reward: '+10% cold resistance',
    },
    {
      area: 'Hunting Grounds',
      objective: 'Kill The Crowbell',
      Reward: '+2 passive skill points',
    },
    {
      area: 'Ogham Farmlands',
      objective: "Find Una's Lute and deliver it to Una",
      Reward: '+2 passive skill points',
    },
    {
      area: 'Ogham Manor',
      objective: 'Kill Candlemass, the Living Rite',
      Reward: '8% increased maximum life',
    },
  ],
  CruelAct2: [
    {
      area: 'Keth',
      objective: 'Kill Kabala, Constrictor Queen',
      Reward: '+2 passive skill points',
    },
    {
      area: 'Valley of the Titans',
      objective:
        'Deliver the Kabala Clan Relic and Sun Clan Relic to the altar and choose one of the two',
      Reward:
        'Choice of bonus: 30% increased Charm Charges gained or 15% increased Life Recovery from Flasks',
    },
    {
      area: 'Deshar',
      objective: 'Find the Final Letter and deliver it to Shambrin',
      Reward: '+2 passive skill points',
    },
    {
      area: 'The Spires of Deshar',
      objective: 'Interact with the Sisters of Garukhan monument',
      Reward: '+10% lightning resistance',
    },
  ],
  CruelAct3: [
    {
      area: 'Jungle Ruins',
      objective: 'Kill Mighty Silverfist',
      Reward: '+2 passive skill points',
    },
    {
      area: 'The Azak Bog',
      objective: 'Kill Ignagduk, The Bog Witch',
      Reward: '+40 spirit',
    },
    {
      area: 'The Venom Crypts',
      objective: 'Find the Venom Vial and deliver it to Servi',
      Reward:
        'Choose 1 of 3 permanent options:\n' +
        '(+10% to Chaos Resistance / +5 to All Attributes / 15% reduced Slowing Potency of Debuffs on you)',
    },
    {
      area: "Jiquani's Machinarium",
      objective: 'Kill Blackjaw, The Remnant',
      Reward: '+10% fire resistance',
    },
    {
      area: 'Aggorat',
      objective: 'Acquire Sacrificial Heart by killing enemies. Sacrifice it at the altar',
      Reward: '+2 passive skill points',
    },
  ],
}
