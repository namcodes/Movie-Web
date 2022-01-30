<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
class EditEpisodeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('title');
        $builder->add('description');

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
        $builder->add('enabled');
        $builder->add("file",null,array("label"=>"","required"=>false));
        $builder->add('save', 'submit',array("label"=>"SAVE"));

    }
    public function getName()
    {
        return 'Episode';
    }
}
?>