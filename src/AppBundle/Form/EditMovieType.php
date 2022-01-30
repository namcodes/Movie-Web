<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
class EditMovieType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('title');
        $builder->add('description');
        $builder->add('year');
        $builder->add('enabled');
        $builder->add('comment');
        $builder->add('imdb');
        $builder->add('playas' ,ChoiceType::class, array(
                'choices' => array(
                    1 => "Free",
                    2 => "Premuim",
                    3 => "Unlock with rewards Ads"
                )));   
        $builder->add('downloadas' ,ChoiceType::class, array(
                'choices' => array(
                    1 => "Free",
                    2 => "Premuim",
                    3 => "Unlock with rewards Ads"
                )));        
        $builder->add('duration');
        $builder->add('classification');
        $builder->add('tags');
        $builder->add("genres",'entity',
                  array(
                        'class' => 'AppBundle:Genre',
                        'expanded' => true,
                        "multiple" => "true",
                        'by_reference' => false
                      )
                  );
        $builder->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
            $article = $event->getData();
            $form = $event->getForm();
            if ($article and null !== $article->getId()) {
                 $form->add("fileposter",null,array("label"=>"","required"=>false));
                 $form->add("filecover",null,array("label"=>"","required"=>false));
            }else{
                 $form->add("fileposter",null,array("label"=>"","required"=>true));
                 $form->add("filecover",null,array("label"=>"","required"=>false));
            }
        });
        $builder->add('save', 'submit',array("label"=>"SAVE"));

    }
    public function getName()
    {
        return 'Movie';
    }
}
?>