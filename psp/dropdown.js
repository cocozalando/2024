function getSubChannel(){

            var list1 = document.getElementById('year');
            var list2 = document.getElementById('channel');
            var list3 = document.getElementById('subchannel');
            var list2SelectedValue = list2.options[list2.selectedIndex].value;


            if (list1SelectedValue=='2001')

            {
                        
            if (list2SelectedValue=='001')
            {
                list3.options.length=0;

                list3.options[1] = new Option('affiliate', '01');
            }
            

            else if (list2SelectedValue=='002')
            {

                list3.options.length=0;

                list3.options[1] = new Option('display', '01');
                list3.options[2] = new Option('direct deals', '02');
                list3.options[3] = new Option('google gdn (no use)', '03');
                list3.options[4] = new Option('google youtube (no use)', '04');
                list3.options[5] = new Option('direct buys (no use)', '05');
                list3.options[6] = new Option('other', '06');
                list3.options[7] = new Option('audio', '07');
                list3.options[8] = new Option('ooh', '08');
                list3.options[9] = new Option('tv', '09');

            }



            else if (list2SelectedValue=='003')
            {

                list3.options.length=0;
                
                list3.options[1] = new Option('meta', '01');
                list3.options[2] = new Option('snap', '02');
                list3.options[3] = new Option('tiktok', '03');
                list3.options[4] = new Option('x (twitter)', '04');
                list3.options[5] = new Option('pinterest', '05');
                list3.options[6] = new Option('other', '06');

             
                
            }

      
            else if (list2SelectedValue=='004')
            {

                list3.options.length=0;

                list3.options[1] = new Option('digital radio', '01');
           


            }

            else if (list2SelectedValue=='005')
            {

                list3.options.length=0;

                list3.options[1] = new Option('digital tv', '01');


            }

            else if (list2SelectedValue=='006')
            {

                list3.options.length=0;

                list3.options[1] = new Option('cinema', '01');

            }

            else if (list2SelectedValue=='007')
            {

                list3.options.length=0;

                list3.options[1] = new Option('classic ooh', '01');
                list3.options[2] = new Option('digital ooh', '02');
                list3.options[3] = new Option('special formats', '03');


            }

            else if (list2SelectedValue=='008')
            {

                list3.options.length=0;

                list3.options[1] = new Option('classic radio', '01');

            }

       
            else if (list2SelectedValue=='009')
            {

                list3.options.length=0;

                list3.options[1] = new Option('mkt. driven collab.', '01');
        

            }


            else if (list2SelectedValue=='010')
            {

                list3.options.length=0;

                list3.options[1] = new Option('mkt. driven events', '01');
                        
            }

            else if (list2SelectedValue=='011')
            {

                list3.options.length=0;

                list3.options[1] = new Option('print', '01');
                list3.options[2] = new Option('digital print', '02');
            
            }

            else if (list2SelectedValue=='012')
            {

                list3.options.length=0;

                list3.options[1] = new Option('classic tv', '01');
                
            }

            else if (list2SelectedValue=='013')
            {

                list3.options.length=0;

                list3.options[1] = new Option('consumer events', '01');
                list3.options[2] = new Option('showroom', '02');
                list3.options[3] = new Option('partner events', '03');
                list3.options[4] = new Option('cast celebr. events', '04');

            }

            else if (list2SelectedValue=='014')
            {

                list3.options.length=0;

                list3.options[1] = new Option('media/journalists', '01');
                list3.options[2] = new Option('media collab.', '02');
                list3.options[3] = new Option('partnerships', '03');
                        
            }


            else if (list2SelectedValue=='015')
            {

                list3.options.length=0;

                list3.options[1] = new Option('influencer collab.', '01');
                        
            }

            else if (list2SelectedValue=='016')
            {

                list3.options.length=0;

                list3.options[1] = new Option('facebook', '01');
                list3.options[2] = new Option('instagram', '02');
                list3.options[3] = new Option('pinterest', '03');
                list3.options[4] = new Option('tiktok', '04');
                list3.options[5] = new Option('youtube', '05');
                list3.options[6] = new Option('meta', '06');
                list3.options[7] = new Option('other', '07');


            }

            else if (list2SelectedValue=='017')
            {

                list3.options.length=0;

                list3.options[1] = new Option('gc b2b', '01');
                list3.options[2] = new Option('gc retail', '02');
                list3.options[3] = new Option('gc b2c', '03');

            }
            
             else if (list2SelectedValue=='018')
            {

                list3.options.length=0;

                list3.options[1] = new Option('crm', '01');


            }


            else if (list2SelectedValue=='019')
            {

                list3.options.length=0;

                list3.options[1] = new Option('market research', '01');

            }
            
            
             else if (list2SelectedValue=='020')
            {

                list3.options.length=0;

                list3.options[1] = new Option('local production', '01');
                list3.options[2] = new Option('cast celebr. prod.', '02');
                list3.options[3] = new Option('music', '03');
                list3.options[4] = new Option('extension rights', '04');
                list3.options[5] = new Option('event prod./licensing fee', '05');
                list3.options[6] = new Option('influencer collab. prod', '06');
                list3.options[7] = new Option('talent prod.', '07');
                list3.options[8] = new Option('post production', '08');

            }

            else if (list2SelectedValue=='021')
            {

                list3.options.length=0;

                list3.options[1] = new Option('content', '01');
                list3.options[2] = new Option('zstudios', '02');
                list3.options[3] = new Option('social media prod.', '03');
                        
            }

            else if (list2SelectedValue=='022')
            {

                list3.options.length=0;

                list3.options[1] = new Option('media agency fees', '01');
                list3.options[2] = new Option('consumer pr agency fees', '02');
                list3.options[3] = new Option('social media agency fees', '03');
                list3.options[4] = new Option('giftcards agency fees', '04');
                list3.options[5] = new Option('creative local agency fees', '05');
                list3.options[6] = new Option('creative global agency fees', '06');
                list3.options[7] = new Option('creative global production fees', '07');

            }

            else if (list2SelectedValue=='023')
            {

                list3.options.length=0;

                list3.options[1] = new Option('design&visual id', '01');
                list3.options[2] = new Option('tech/product', '02');
                list3.options[3] = new Option('media tech partner', '03');
                        
            }

            else if (list2SelectedValue=='024')
            {

                list3.options.length=0;

                list3.options[1] = new Option('strategic setup', '01');
                list3.options[2] = new Option('brand identity proj.', '02');

            }

            else if (list2SelectedValue=='025')
            {

                list3.options.length=0;

                list3.options[1] = new Option('google search', '01');
                list3.options[2] = new Option('apple', '02');
                list3.options[3] = new Option('other', '03');
                        
            }

            else if (list2SelectedValue=='026')
            {

                list3.options.length=0;

                list3.options[1] = new Option('meta', '01');
                list3.options[2] = new Option('snap', '02');
                list3.options[3] = new Option('tiktok', '03');
                list3.options[4] = new Option('other', '04');

            }

            else if (list2SelectedValue=='027')
            {

                list3.options.length=0;

                list3.options[1] = new Option('google gdn', '01');
                list3.options[2] = new Option('google youtube', '02');
                list3.options[3] = new Option('google uac', '03');
                list3.options[4] = new Option('other', '04');

            }

            else if (list2SelectedValue=='028')
            {

                list3.options.length=0;

                list3.options[1] = new Option('seo', '01');

            }

            else if (list2SelectedValue=='029')
            {

                list3.options.length=0;

                list3.options[1] = new Option('tooling', '01');

            }

            else if (list2SelectedValue=='030')
            {

                list3.options.length=0;

                list3.options[1] = new Option('innovation budget', '01');

            }

            else if (list2SelectedValue=='031')
            {

                list3.options.length=0;

                list3.options[1] = new Option('wkz', '01');

            }

            else if (list2SelectedValue=='032')
            {

                list3.options.length=0;

                list3.options[1] = new Option('accounting effects', '01');
                        
            }

            else if (list2SelectedValue=='033')
            {

                list3.options.length=0;

                list3.options[1] = new Option('other zms campaigns', '01');

            }

            else if (list2SelectedValue=='034')
            {

                list3.options.length=0;

                list3.options[1] = new Option('creative lab', '01');

            }

            else if (list2SelectedValue=='035')
            {

                list3.options.length=0;

                list3.options[1] = new Option('global ots', '01');

            }

            else if (list2SelectedValue=='036')
            {

                list3.options.length=0;

                list3.options[1] = new Option('tbd', '01');

            }

            else if (list2SelectedValue=='037')
            {

                list3.options.length=0;

                list3.options[1] = new Option('direct buys', '01');

            }

            }


}

