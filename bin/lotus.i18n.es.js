if (!("lotus" in window)) { window.lotus = {}; }
if (!("i18n" in lotus)) { lotus.i18n = {}; }
if (!("grammars" in lotus.i18n)) { lotus.i18n.grammars = {}; }
if (!("lexicons" in lotus.i18n)) { lotus.i18n.lexicons = {}; }
lotus.i18n.grammars.es = {"subrules":{"subject":[{"for":["actor"],"do":"%actor%"},{"for":["actors"],"do":"%actors%"},{"for":["actor_pronoun"],"match":["actor_pronoun","^they$"],"do":"pronoun.%actor_pronoun%.singular.inclusive"},{"for":["actor_pronoun"],"do":"pronoun.%actor_pronoun%"},{"for":["actors_pronoun"],"match":["actors_pronoun","^they$"],"do":"pronoun.%actors_pronoun%.plural.inclusive"},{"for":["actors_pronoun"],"do":"pronoun.%actors_pronoun%"}],"verb":[{"for":["actor","verb"],"do":"verb.%verb%.third_person_singular"},{"for":["actor_pronoun","verb"],"match":["actor_pronoun","^you$"],"do":"verb.%verb%.second_person_singular"},{"for":["actor_pronoun","verb"],"do":"verb.%verb%.third_person_singular"},{"for":["actors","verb"],"do":"verb.%verb%.third_person_plural"},{"for":["actors_pronoun","verb"],"do":"verb.%verb%.third_person_plural"},{"for":["verb"],"do":"verb.%verb%.past_participle"}],"object":[{"for":["object"],"do":"object.singular_%object%"},{"for":["objects"],"do":"object.plural_%objects%"}],"object_possessive":[{"for":["object","object_owner"],"match":["object_owner","^el "],"do":"object.singular_%object% d%object_owner%"},{"for":["object","object_owner"],"do":"object.singular_%object% de %object_owner%"},{"for":["objects","object_owner"],"match":["object_owner","^el "],"do":"object.plural_%objects% d%object_owner%"},{"for":["objects","object_owner"],"do":"object.plural_%objects% de %object_owner%"},{"for":["object","object_owner_pronoun"],"match":["object_owner_pronoun","^our$"],"do":"possessive_pronoun.%object_owner_pronoun%.inclusive.singular object.%object%"},{"for":["object","object_owner_pronoun"],"do":"possessive_pronoun.%object_owner_pronoun%.singular object.%object%"},{"for":["objects","object_owner_pronoun"],"match":["object_owner_pronoun","^our$"],"do":"possessive_pronoun.%object_owner_pronoun%.inclusive.plural object.plural_%objects%"},{"for":["objects","object_owner_pronoun"],"do":"possessive_pronoun.%object_owner_pronoun%.plural object.plural_%objects%"},{"for":["object","object_owners"],"match":["object_owners","^el "],"do":"object.singular_%object% d%object_owners%"},{"for":["object","object_owners"],"do":"object.singular_%object% de %object_owners%"},{"for":["objects","object_owners"],"match":["object_owners","^el "],"do":"object.plural_%objects% d%object_owners%"},{"for":["objects","object_owners"],"do":"object.plural_%objects% de %object_owners%"},{"for":["object","object_owners_pronoun"],"match":["object_owners_pronoun","^our$"],"do":"possessive_pronoun.%object_owners_pronoun%.inclusive.singular object.%object%"},{"for":["object","object_owners_pronoun"],"do":"possessive_pronoun.%object_owners_pronoun%.singular object.%object%"},{"for":["objects","object_owners_pronoun"],"match":["object_owners_pronoun","^our$"],"do":"possessive_pronoun.%object_owners_pronoun%.inclusive.plural object.plural_%objects%"},{"for":["objects","object_owners_pronoun"],"do":"possessive_pronoun.%object_owners_pronoun%.plural object.plural_%objects%"}],"target":[{"for":["target"],"do":"a object.singular_%target%"},{"for":["targets"],"do":"a object.many_%targets%"}],"target_possessive":[{"for":["target","target_owner"],"match":["target_owner","^el "],"do":"a object.singular_%target% d%target_owner%"},{"for":["target","target_owner"],"do":"a object.singular_%target% de %target_owner%"},{"for":["targets","target_owner"],"match":["target_owner","^el "],"do":"a object.many_%targets% d%target_owner%"},{"for":["targets","target_owner"],"do":"a object.many_%targets% de %target_owner%"},{"for":["target","target_owner_pronoun"],"match":["target_owner_pronoun","^our$"],"do":"a possessive_pronoun.%target_owner_pronoun%.inclusive.singular object.%target%"},{"for":["target","target_owner_pronoun"],"do":"a possessive_pronoun.%target_owner_pronoun%.singular object.%target%"},{"for":["targets","target_owner_pronoun"],"match":["target_owner_pronoun","^our$"],"do":"a possessive_pronoun.%target_owner_pronoun%.inclusive.plural object.plural_%targets%"},{"for":["targets","target_owner_pronoun"],"do":"a possessive_pronoun.%target_owner_pronoun%.plural object.plural_%targets%"},{"for":["target","target_owners"],"match":["target_owners","^el "],"do":"a object.singular_%target% d%target_owners%"},{"for":["target","target_owners"],"do":"a object.singular_%target% de %target_owners%"},{"for":["targets","target_owners"],"match":["target_owners","^el "],"do":"a object.many_%targets% d%target_owners%"},{"for":["targets","target_owners"],"do":"a object.many_%targets% de %target_owners%"},{"for":["target","target_owners_pronoun"],"match":["target_owners_pronoun","^our$"],"do":"a possessive_pronoun.%target_owners_pronoun%.inclusive.singular object.%target%"},{"for":["target","target_owners_pronoun"],"do":"a possessive_pronoun.%target_owners_pronoun%.singular object.%target%"},{"for":["targets","target_owners_pronoun"],"match":["target_owners_pronoun","^our$"],"do":"a possessive_pronoun.%target_owners_pronoun%.inclusive.plural object.plural_%targets%"},{"for":["targets","target_owners_pronoun"],"do":"a possessive_pronoun.%target_owners_pronoun%.plural object.plural_%targets%"}]},"rules":[{"for":["verb"],"do":"verb.%verb%.third_person_singular"},{"for":["action"],"do":"action.%action%"},{"for":["category"],"do":"category.%category%"},{"for":["field"],"do":"field.%field%"},{"do":"$subject$ $verb$ $target$"},{"do":"$subject$ $verb$ $target_possessive$"},{"do":"$subject$ $verb$ $object$"},{"do":"$subject$ $verb$ $object$ $target$"},{"do":"$subject$ $verb$ $object$ $target_possessive$"},{"do":"$subject$ $verb$ $object_possessive$"},{"do":"$subject$ $verb$ $object_possessive$ $target$"},{"do":"$subject$ $verb$ $object_possessive$ $target_possessive$"},{"do":"$verb$ $object_possessive$ $target$"},{"do":"$verb$ $object_possessive$ $target_possessive$"},{"do":"$verb$ $object$ $target_possessive$"},{"do":"$verb$ $object$ $target$"},{"do":"$verb$ $target$"},{"do":"$verb$ $target_possessive$"},{"do":"$verb$ $object_possessive$"},{"do":"$verb$ $object$"},{"do":"$subject$ $verb$"},{"do":"$object_possessive$"},{"do":"$object$"},{"do":"$subject$"}]};
lotus.i18n.lexicons.es = {"action":{"favorite":"apreciar","unfavorite":"eliminar la apreciación","follow":"seguir","unfollow":"dejar de seguir","like":"me gusta","unlike":"no me gusta","mention":"mencionar","reply":"respondar","save":"guardar","share":"compartir","unshare":"dejar de compartir","subscribe":"suscribir","unsubscribe":"dejar de suscribirse","tag":"etiquetar","untag":"eliminar la etiqueta"},"category":{"activities":"actividades","mentions":"menciones","replies":"respuestas","timeline":"cronología"},"field":{"title":"titulo","password":"contraseña","username":"nombre de usuario","avatar":"avatar"},"possessive_pronoun":{"our":{"inclusive":{"singular":"nuestra/o","plural":"nuestras/os"},"masculine":{"singular":"nuestro","plural":"nuestros"},"feminine":{"singular":"nuestra","plural":"nuestras"}},"their":{"singular":"su","plural":"sus"},"your":{"singular":"tu","plural":"tus"},"his":{"singular":"su","plural":"sus"},"her":{"singular":"su","plural":"sus"},"em":{"singular":"su","plural":"sus"},"Thor":{"singular":"su","plural":"sus"},"hum":{"singular":"su","plural":"sus"},"per":{"singular":"su","plural":"sus"},"thon":{"singular":"su","plural":"sus"},"jem":{"singular":"su","plural":"sus"},"ver":{"singular":"su","plural":"sus"},"xem":{"singular":"su","plural":"sus"},"zir":{"singular":"su","plural":"sus"},"zem":{"singular":"su","plural":"sus"},"hir":{"singular":"su","plural":"sus"},"mer":{"singular":"su","plural":"sus"},"zhim":{"singular":"su","plural":"sus"}},"pronoun":{"you":"tú","he":"el","she":"ella","they":{"singular":{"inclusive":"el o ella","feminine":"ella","masculine":"ello"},"plural":{"inclusive":"ella/os","feminine":"ellas","masculine":"ellos"}},"e":"e","ey":"ey","Tho":"Tho","hu":"hu","per":"per","thon":"thon","jee":"jee","ve":"ve","xe":"xe","ze":"ze","zhe":"zhe"},"verb":{"mention":{"past_participle":"mencionado","first_person_singular":"mencioné","second_person_singular":"mencionaste","third_person_singular":"mencionó","first_person_plural":"mencionamos","second_person_plural":"mencionaron","third_person_plural":"mencionaron"},"reply":{"past_participle":"respondido","first_person_singular":"respondí","second_person_singular":"respondiste","third_person_singular":"respondó","first_person_plural":"respondimos","second_person_plural":"respondieron","third_person_plural":"respondieron"},"favorite":{"past_participle":"apreciando","first_person_singular":"aprecié","second_person_singular":"apreciaste","third_person_singular":"apreció","first_person_plural":"apreciamos","second_person_plural":"apreciaron","third_person_plural":"apreciaron"},"share":{"past_participle":"compartido","first_person_singular":"compartí","second_person_singular":"compartiste","third_person_singular":"compartió","first_person_plural":"compartimos","second_person_plural":"compartieron","third_person_plural":"compartieron"},"post":{"past_participle":"publicado","first_person_singular":"publiqué","second_person_singular":"publicaste","third_person_singular":"publicó","first_person_plural":"publicamos","second_person_plural":"publicaron","third_person_plural":"publicaron"},"follow":{"past_participle":"seguiendo","first_person_singular":"seguí","second_person_singular":"seguiste","third_person_singular":"siguió","first_person_plural":"seguimos","second_person_plural":"seguieron","third_person_plural":"seguieron"},"subscribe":{"past_participle":"suscripto","first_person_singular":"suscribí","second_person_singular":"suscribiste","third_person_singular":"suscribió","first_person_plural":"suscribimos","second_person_plural":"suscribieron","third_person_plural":"suscribieron"},"like":{"past_participle":"gustado","first_person_singular":"me gustó","second_person_singular":"te gustó","third_person_singular":"le gustó","first_person_plural":"nos gustó","second_person_plural":"les gustó","third_person_plural":"les gustó"},"join":{"past_participle":"juntado","first_person_singular":"junté","second_person_singular":"juntaste","third_person_singular":"juntó","first_person_plural":"juntamos","second_person_plural":"juntaron","third_person_plural":"juntaron"},"play":{"past_participle":"jugado","first_person_singular":"jugué","second_person_singular":"jugaste","third_person_singular":"jugó","first_person_plural":"jugamos","second_person_plural":"jugaron","third_person_plural":"jugaron"},"listen":{"past_participle":"escuchado","first_person_singular":"escuché","second_person_singular":"escuchaste","third_person_singular":"escuchó","first_person_plural":"escuchamos","second_person_plural":"escucharon","third_person_plural":"escucharon"},"update":{"past_participle":"actualizado","first_person_singular":"actualicé","second_person_singular":"actualizaste","third_person_singular":"actualizó","first_person_plural":"actualizamos","second_person_plural":"actualizaron","third_person_plural":"actualizaron"},"tag":{"past_participle":"etiquetado","first_person_singular":"etiqueté","second_person_singular":"etiquetaste","third_person_singular":"etiquetó","first_person_plural":"etiquetamos","second_person_plural":"etiquetaron","third_person_plural":"etiquetaron"},"save":{"past_participle":"guardado","first_person_singular":"guardé","second_person_singular":"guardaste","third_person_singular":"guardó","first_person_plural":"guardamos","second_person_plural":"guardaron","third_person_plural":"guardaron"},"make-friend":{"past-participle":"hecho amigos","first_person_singular":"me hice amigo","second_person_singular":"te has convierten en amigos","third_person_singular":"se hicieron amigos","first_person_plural":"nos hicimos amigos","second_person_plural":"hicieron amigos","third_person_plural":"hicieron amigos"}},"object":{"article":"artículo","singular_article":"un artículo","plural_article":"artículos","many_article":"unos artículos","some_article":"algunos artículos","audio":"audio","singular_audio":"un audio","plural_audio":"audios","many_audio":"unos audios","some_audio":"algunos audios","video":"vídeo","singular_video":"un vídeo","plural_video":"vídeos","many_video":"unas imagen","some_video":"algunas imagen","image":"imagen","singular_image":"una imagen","plural_image":"imagenes","place":"lugar","singular_place":"un lugar","plural_place":"lugares","many_place":"unos lugares","some_place":"algunos lugares","activity":"actividad","singular_activity":"un actividad","plural_activity":"actividades","many_activity":"unos actividades","some_activity":"algunos actividades","list":"lista","singular_list":"una lista","plural_list":"listas","many_list":"unas listas","some_list":"algunas listas","status":"estado","singular_status":"un estado","plural_status":"estados","many_status":"unos estados","some_status":"algunos estados","note":"nota","singular_note":"una nota","plural_note":"notas","many_note":"unas notas","some_note":"algunas notas","comment":"comentario","singular_comment":"un comentario","plural_comment":"comentarios","many_comment":"unos comentarios","some_comment":"algunos comentarios","file":"archivo","singular_file":"un archivo","plural_files":"archivos","many_file":"unos archivos","some_file":"algunos archivos","album":"álbum","singular_album":"un álbum","plural_album":"álbumes","many_album":"unos álbumes","some_album":"algunos álbumes"}};
