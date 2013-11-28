if (!("lotus" in window)) {
  window.lotus = (function () {
    var lotus = {
    };

    return lotus;
  }());
}

if (!("i18n" in lotus)) {
  lotus.i18n = {}
}

if (!("raw_grammars" in lotus.i18n)) {
  lotus.i18n.raw_grammars = {}
}

if (!("raw_lexicons" in lotus.i18n)) {
  lotus.i18n.raw_lexicons = {}
}

lotus.i18n.raw_lexicons.en = [
  "en:",
  "  action:",
  "    favorite:    \"favorite\"",
  "    unfavorite:  \"unfavorite\"",
  "    follow:      \"follow\"",
  "    unfollow:    \"unfollow\"",
  "    like:        \"like\"",
  "    unlike:      \"unlike\"",
  "    mention:     \"mention\"",
  "    reply:       \"reply\"",
  "    save:        \"save\"",
  "    share:       \"share\"",
  "    unshare:     \"unshare\"",
  "    subscribe:   \"subscribe\"",
  "    unsubscribe: \"unsubscribe\"",
  "    tag:         \"tag\"",
  "    untag:       \"untag\"",
  "",
  "  category:",
  "    activities: \"activities\"",
  "    mentions:   \"mentions\"",
  "    replies:    \"replies\"",
  "    timeline:   \"timeline\"",
  "",
  "  field:",
  "    title:    \"title\"",
  "    password: \"password\"",
  "    username: \"username\"",
  "    avatar:   \"avatar\"",
  "",
  "  possessive_pronoun:",
  "    our:   \"our\"",
  "    their: \"their\"",
  "    his:   \"his\"",
  "    her:   \"her\"",
  "    em:    \"em\"",
  "    Thor:  \"Thor\"",
  "    your:  \"your\"",
  "    hum:   \"hum\"",
  "    per:   \"per\"",
  "    thon:  \"thon\"",
  "    jem:   \"jem\"",
  "    ver:   \"ver\"",
  "    xem:   \"xem\"",
  "    zir:   \"zir\"",
  "    zem:   \"zem\"",
  "    hir:   \"hir\"",
  "    mer:   \"mer\"",
  "    zhim:  \"zhim\"",
  "",
  "  pronoun:",
  "    you:  \"you\"",
  "    he:   \"he\"",
  "    she:  \"she\"",
  "    they: \"they\"",
  "    e:    \"e\"",
  "    ey:   \"ey\"",
  "    Tho:  \"Tho\"",
  "    hu:   \"hu\"",
  "    per:  \"per\"",
  "    thon: \"thon\"",
  "    jee:  \"jee\"",
  "    ve:   \"ve\"",
  "    xe:   \"xe\"",
  "    ze:   \"ze\"",
  "    zhe:  \"zhe\"",
  "",
  "  verb:",
  "    reply:       \"replied\"",
  "    mention:     \"mentioned\"",
  "    favorite:    \"favorited\"",
  "    share:       \"shared\"",
  "    post:        \"posted\"",
  "    follow:      \"followed\"",
  "    like:        \"liked\"",
  "    join:        \"joined\"",
  "    play:        \"played\"",
  "    listen:      \"listened\"",
  "    update:      \"updated\"",
  "    tag:         \"tagged\"",
  "    save:        \"saved\"",
  "    make-friend: \"became friends\"",
  "",
  "  object:",
  "    article:              \"article\"",
  "    singular_article:     \"an article\"",
  "    plural_article:       \"articles\"",
  "",
  "    audio:                \"audio\"",
  "    singular_audio:       \"audio\"",
  "    plural_audio:         \"audio\"",
  "",
  "    video:                \"video\"",
  "    singular_video:       \"a video\"",
  "    plural_video:         \"videos\"",
  "",
  "    image:                \"image\"",
  "    singular_image:       \"an image\"",
  "    plural_image:         \"images\"",
  "",
  "    place:                \"place\"",
  "    singular_place:       \"a place\"",
  "    plural_place:         \"places\"",
  "",
  "    activity:             \"activity\"",
  "    singular_activity:    \"an activity\"",
  "    plural_activity:      \"activities\"",
  "",
  "    list:                 \"list\"",
  "    singular_list:        \"a list\"",
  "    plural_list:          \"lists\"",
  "",
  "    status:               \"status\"",
  "    singular_status:      \"a status\"",
  "    plural_status:        \"statuses\"",
  "",
  "    note:                 \"note\"",
  "    singular_note:        \"a note\"",
  "    plural_note:          \"notes\"",
  "",
  "    comment:              \"comment\"",
  "    singular_comment:     \"a comment\"",
  "    plural_comment:       \"comments\"",
  "",
  "    file:                 \"file\"",
  "    singular_file:        \"a file\"",
  "    plural_files:         \"files\"",
  "",
  "    album:                \"album\"",
  "    singular_album:       \"an album\"",
  "    plural_album:         \"albums\"",
  "",
  "    photo-album:          \"photo album\"",
  "    singular_photo-album: \"a photo album\"",
  "    plural_photo-album:   \"photo albums\""].join('\n');

lotus.i18n.raw_grammars.en = [
  "en:",
  "  subrules:",
  "    subject:",
  "      - for:   [\"actor\"]",
  "        do:    \"%actor%\"",
  "      - for:   [\"actors\"]",
  "        do:    \"%actors%\"",
  "      - for:   [\"actor_pronoun\"]",
  "        do:    \"pronoun.%actor_pronoun%\"",
  "      - for:   [\"actors_pronoun\"]",
  "        do:    \"pronoun.%actors_pronoun%\"",
  "",
  "    object:",
  "      - for:   [\"object\"]",
  "        do:    \"object.singular_%object%\"",
  "      - for:   [\"objects\"]",
  "        do:    \"object.plural_%objects%\"",
  "",
  "    target:",
  "      - for:   [\"target\"]",
  "        do:    \"to object.singular_%target%\"",
  "      - for:   [\"targets\"]",
  "        do:    \"to some object.plural_%targets%\"",
  "",
  "    target_possessive:",
  "      - for:   [\"target\", \"target_owner\"]",
  "        match: [\"target_owner\", \"s$\"]",
  "        do:    \"to %target_owner%' object.%target%\"",
  "      - for:   [\"target\", \"target_owner\"]",
  "        do:    \"to %target_owner%'s object.%target%\"",
  "",
  "      - for:   [\"targets\", \"target_owner\"]",
  "        match: [\"target_owner\", \"s$\"]",
  "        do:    \"to %target_owner%' object.plural_%targets%\"",
  "      - for:   [\"targets\", \"target_owner\"]",
  "        do:    \"to %target_owner%'s object.plural_%targets%\"",
  "",
  "      - for:   [\"target\", \"target_owners\"]",
  "        match: [\"target_owners\", \"s$\"]",
  "        do:    \"to %target_owners%' object.%target%\"",
  "      - for:   [\"target\", \"target_owners\"]",
  "        do:    \"to %target_owners%'s object.%target%\"",
  "",
  "      - for:   [\"targets\", \"target_owners\"]",
  "        match: [\"target_owners\", \"s$\"]",
  "        do:    \"to %target_owners%' object.plural_%targets%\"",
  "      - for:   [\"targets\", \"target_owners\"]",
  "        do:    \"to %target_owners%'s object.plural_%targets%\"",
  "",
  "      - for:   [\"target\", \"target_owner_pronoun\"]",
  "        match: [\"target_owner_pronoun\", \"s$\"]",
  "        do:    \"to possessive_pronoun.%target_owner_pronoun% object.%target%\"",
  "      - for:   [\"target\", \"target_owner_pronoun\"]",
  "        do:    \"to possessive_pronoun.%target_owner_pronoun% object.%target%\"",
  "",
  "      - for:   [\"targets\", \"target_owner_pronoun\"]",
  "        match: [\"target_owner_pronoun\", \"s$\"]",
  "        do:    \"to possessive_pronoun.%target_owner_pronoun% object.plural_%targets%\"",
  "      - for:   [\"targets\", \"target_owner_pronoun\"]",
  "        do:    \"to possessive_pronoun.%target_owner_pronoun% object.plural_%targets%\"",
  "",
  "      - for:   [\"target\", \"target_owners_pronoun\"]",
  "        match: [\"target_owners_pronoun\", \"s$\"]",
  "        do:    \"to possessive_pronoun.%target_owners_pronoun% object.%target%\"",
  "      - for:   [\"target\", \"target_owners_pronoun\"]",
  "        do:    \"to possessive_pronoun.%target_owners_pronoun% object.%target%\"",
  "",
  "      - for:   [\"targets\", \"target_owners_pronoun\"]",
  "        match: [\"target_owners_pronoun\", \"s$\"]",
  "        do:    \"to possessive_pronoun.%target_owners_pronoun% object.plural_%targets%\"",
  "      - for:   [\"targets\", \"target_owners_pronoun\"]",
  "        do:    \"to possessive_pronoun.%target_owners_pronoun% object.plural_%targets%\"",
  "",
  "    object_possessive:",
  "      - for:   [\"object\", \"object_owner\"]",
  "        match: [\"object_owner\", \"s$\"]",
  "        do:    \"%object_owner%' object.%object%\"",
  "      - for:   [\"object\", \"object_owner\"]",
  "        do:    \"%object_owner%'s object.%object%\"",
  "",
  "      - for:   [\"objects\", \"object_owner\"]",
  "        match: [\"object_owner\", \"s$\"]",
  "        do:    \"%object_owner%' object.plural_%objects%\"",
  "      - for:   [\"objects\", \"object_owner\"]",
  "        do:    \"%object_owner%'s object.plural_%objects%\"",
  "",
  "      - for:   [\"object\", \"object_owners\"]",
  "        match: [\"object_owners\", \"s$\"]",
  "        do:    \"%object_owners%' object.%object%\"",
  "      - for:   [\"object\", \"object_owners\"]",
  "        do:    \"%object_owners%'s object.%object%\"",
  "",
  "      - for:   [\"objects\", \"object_owners\"]",
  "        match: [\"object_owners\", \"s$\"]",
  "        do:    \"%object_owners%' object.plural_%objects%\"",
  "      - for:   [\"objects\", \"object_owners\"]",
  "        do:    \"%object_owners%'s object.plural_%objects%\"",
  "",
  "      - for:   [\"object\", \"object_owner_pronoun\"]",
  "        match: [\"object_owner_pronoun\", \"s$\"]",
  "        do:    \"possessive_pronoun.%object_owner_pronoun% object.%object%\"",
  "      - for:   [\"object\", \"object_owner_pronoun\"]",
  "        do:    \"possessive_pronoun.%object_owner_pronoun% object.%object%\"",
  "",
  "      - for:   [\"objects\", \"object_owner_pronoun\"]",
  "        match: [\"object_owner_pronoun\", \"s$\"]",
  "        do:    \"possessive_pronoun.%object_owner_pronoun% object.plural_%objects%\"",
  "      - for:   [\"objects\", \"object_owner_pronoun\"]",
  "        do:    \"possessive_pronoun.%object_owner_pronoun% object.plural_%objects%\"",
  "",
  "      - for:   [\"object\", \"object_owners_pronoun\"]",
  "        match: [\"object_owners_pronoun\", \"s$\"]",
  "        do:    \"possessive_pronoun.%object_owners_pronoun% object.%object%\"",
  "      - for:   [\"object\", \"object_owners_pronoun\"]",
  "        do:    \"possessive_pronoun.%object_owners_pronoun% object.%object%\"",
  "",
  "      - for:   [\"objects\", \"object_owners_pronoun\"]",
  "        match: [\"object_owners_pronoun\", \"s$\"]",
  "        do:    \"possessive_pronoun.%object_owners_pronoun% object.plural_%objects%\"",
  "      - for:   [\"objects\", \"object_owners_pronoun\"]",
  "        do:    \"possessive_pronoun.%object_owners_pronoun% object.plural_%objects%\"",
  "",
  "  rules:",
  "    # she",
  "    - for: [\"actor_pronoun\"]",
  "      do:  \"pronoun.%actor_pronoun%\"",
  "    # they",
  "    - for: [\"actors_pronoun\"]",
  "      do:  \"pronoun.%actors_pronoun%\"",
  "    # her",
  "    - for: [\"object_owner_pronoun\"]",
  "      do:  \"possessive_pronoun.%object_owner_pronoun%\"",
  "    # their",
  "    - for: [\"object_owners_pronoun\"]",
  "      do:  \"possessive_pronoun.%object_owners_pronoun%\"",
  "    # wilkie",
  "    - for: [\"actor\"]",
  "      do:  \"%actor%\"",
  "    # the group",
  "    - for: [\"actors\"]",
  "      do:  \"%actors%\"",
  "    # note",
  "    - for: [\"object\"]",
  "      do:  \"object.%object%\"",
  "    # files",
  "    - for: [\"objects\"]",
  "      do:  \"object.plural_%objects%\"",
  "    # played",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb%\"",
  "    # follow",
  "    - for: [\"action\"]",
  "      do:  \"action.%action%\"",
  "    # mentions",
  "    - for: [\"category\"]",
  "      do:  \"category.%category%\"",
  "    # password",
  "    - for: [\"field\"]",
  "      do:  \"field.%field%\"",
  "",
  "    # wilkie's note",
  "    - do:  \"$object_possessive$\"",
  "",
  "    # wilkie posted",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb%\"",
  "",
  "    # wilkie posted to an album",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb% $target$\"",
  "",
  "    # wilkie posted to hir album",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb% $target_possessive$\"",
  "",
  "    # wilkie posted her note",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb% $object_possessive$\"",
  "",
  "    # wilkie posted a note",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb% $object$\"",
  "",
  "    # wilkie posted a note to an album",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb% $object$ $target$\"",
  "",
  "    # wilkie posted her note to an album",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb% $object_possessive$ $target$\"",
  "",
  "    # wilkie posted a note to her album",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb% $object$ $target_possessive$\"",
  "",
  "    # wilkie posted her note to her album",
  "    - for: [\"verb\"]",
  "      do:  \"$subject$ verb.%verb% $object_possessive$ $target_possessive$\"",
  "",
  "    # post a note",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb% $object$\"",
  "",
  "    # post carol's note",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb% $object_possessive$\"",
  "",
  "    # post to a list",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb% $target$\"",
  "",
  "    # post to Thor list",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb% $target_possessive$\"",
  "",
  "    # post a note to a list",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb% $object$ $target$\"",
  "",
  "    # post carol's note to a list",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb% $object_possessive$ $target$\"",
  "",
  "    # post a note to her list",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb% $object$ $target_possessive$\"",
  "",
  "    # post carol's note to her list",
  "    - for: [\"verb\"]",
  "      do:  \"verb.%verb% $object_possessive$ $target_possessive$\""].join('\n');