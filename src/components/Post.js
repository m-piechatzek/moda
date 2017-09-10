import React from 'react'
import './Post.css';

const Post = () => {
  return (
	<div id="pageBody">
		<a className="pure-button" href="#">Back</a>
		<img className="topPic pure-img" src="/images/lehappy1.jpg" alt="Le Happy 1"></img>
		<div className="midText">
			Nōn vereor nē mihi aliquid, iūdicēs, videar adrogāre, sī dē quaestūrā meā dixerō. quamvīs enim illa flōruerit, 
			tamen eum mē posteā fuisse in maximīs imperiīs arbitror ut nōn ita multum mihi glōriae sit ex quaestūrae laude 
			repetendum. sed tamen nōn vereor nē quis audeat dīcere ullīus in Siciliā quaestūram aut clāriōrem aut grātiōrem 
			fuisse. vērē mē hercule hōc dīcam: sīc tum existimābam, nihil hominēs aliud Rōmae nisi dē quaestūrā meā loquī. 
			frūmentī in summā cāritāte maximum numerum mīseram; negōtiātōribus cōmis, mercātōribus iustus, mancipibus 
			līberālis, sociīs abstinens, omnibus eram vīsus in omnī officiō dīligentissimus; excōgitātī quīdam erant ā 
			Siculīs honōrēs in mē inaudītī. itaque hāc spē dēcēdēbam ut mihi populum Rōmānum ultrō omnia dēlātūrum putārem. 
			at ego cum cāsū diēbus eīs itineris faciendī causā dēcēdens ē prōvinciā Puteolōs forte vēnissem, cum plūrimī et 
			lautissimī in hīs locīs solent esse, concidī paene, iūdicēs, cum ex mē quīdam quaesisset quō diē Rōmā exissem et 
			num quidnam esset novī. cui cum respondissem mē dē prōvinciā dēcēdere "etiam mē hercule" inquit, "ut opīnor, ex 
			Africā". huic ego iam stomachans fastīdiōsē "immō ex Siciliā" inquam. tum quīdam, quasi quī omnia scīret "quid? 
			tū nescīs" inquit "hunc quaestōrem Syrācūsīs fuisse?" quid multa? destitī stomachārī et mē ūnum ex eīs fēcī quī 
			ad aquās vēnissent.
		</div>
		<div className="sidePics">
			<img className="twoPic pure-img" src="/images/lehappy2.jpg" alt="Le Happy 2"></img>
			<img className="twoPic pure-img" src="/images/lehappy3.jpg" alt="Le Happy 3"></img>
		</div>
	</div>
  )
}

export default Post
