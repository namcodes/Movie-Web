<?php
namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
class EpisodeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->add('title');
        $builder->add('description');

        $builder->add('enabled');
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
        $builder->add('sourcetype' ,ChoiceType::class, array(
                'choices' => array(
                    1 => "Youtube Url",
                    2 => "m3u8 Url",
                    3 => "MOV Url",
                    4 => "MP4 Url",
                    6 => "MKV Url",
                    7 => "WEBM Url",
                    8 => "Embed source",
                    5 => "File (MP4/MOV/MKV/WEBM)"
                )));
        $builder->add('sourceurl');
        $builder->add("sourcefile",null,array("label"=>"","required"=>false));
        $builder->add("file",null,array("label"=>"","required"=>false));
        $builder->add('save', 'submit',array("label"=>"SAVE"));

    }
    public function getName()
    {
        return 'Episode';
    }
}
?>