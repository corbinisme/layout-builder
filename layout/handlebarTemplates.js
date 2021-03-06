<script id="custom_hero_options" type="text/x-handlebars-template">
    <div class="custom-options">
        <label>Custom Hero Type</label>
        <select class="form-control hero-type">
            {{#select props.SectionOpts.type}}
            <option value="content">Html Content</option>
            <option value="image">Full-screen Image</option>
            {{/select}}
        </select>
        <div class="row">
            <div class="col-xs-6">
                <label class="taller">Custom Hero</label>
            </div>
            <div class="col-xs-6">
                <div class="addWrapper">
                    <select class="form-control addMediaType">
                        <option value="video">Video</option>
                        <option value="carousel">Carousel</option>
                        <option value="image">Image</option>
                    </select>
                    <a href="javascript:void(0)" class="btn btn-default pull-right asset-picker-button" data-vals=""> <i class="fa fa-plus "></i></a>
                </div>
            </div>
        </div>
        <div class="htmlSection" data-id="custom_hero">
            <textarea class="form-control realTimeEditable section-customhero marketingfolder-jsonblob" data-selector=".content" rows="5">{{props.CustomHero}}</textarea>
        </div>
    </div>
</script>
<script id="custom_html_options" type="text/x-handlebars-template">
    <div class="row">
        <div class="col-xs-6">
            <label class="taller">Custom HTML</label> 
        </div>
        <div class="col-xs-6">
            <div class="addWrapper">
                <select class="form-control addMediaType">
                    <option value="video">Video</option>
                    <option value="carousel">Carousel</option>
                    <option value="image">Image</option>
                </select>
                <a href="javascript:void(0)" class="btn btn-default pull-right asset-picker-button" data-vals=""> <i class="fa fa-plus "></i></a>
            </div>
        </div>
    </div>
   
    
    <div class="htmlSection" data-id="custom_html">
        <textarea class="form-control realTimeEditable section-customhtml" data-selector=".content" rows="5">{{props.CustomHtml}}</textarea>
    </div>
</script>
<script id="carousel_options" type="text/x-handlebars-template">
    <div class="custom-options">
        <h3>Carousel Options</h3>

        <div class="row form-group">
            <div class="col-sm-12">
                <label>Type</label>
                <select class="form-control carousel-size">
                    {{#select props.SectionOpts.size}}
                    <option value="thumb">Thumbnail</option>
                    <option value="full">Full-screen</option>
                    {{/select}}
                </select>

            </div>
        </div>
        <div class="thumbOnly">
            <div class="row form-group ">
                <div class="col-xs-12">
                    <label>Thumbs Per View</label>
                    <select class="form-control thumbsPerViewType">
                        {{#select props.SectionOpts.thumbs.slidesPerView}}
                        <option value="auto">Auto</option>
                        <option value="fixed">Fixed</option>
                        {{/select}}
                    </select>
                </div>
            </div>
            <div class="row form-group thumbSlidesFixedOnly">
              
                <div class="col-xs-6 ">
                    <label>Thumbs Per Slide</label>
                    <input type="number" class="form-control thumb-num" placeholder="5" value="{{props.SectionOpts.thumbs.thumbsnum}}" />
                </div>
                <div class="col-xs-6 ">
                    <label>Responsive?</label><br />
                    <input type="checkbox" class="thumb-responsive" {{#if props.SectionOpts.thumbs.responsive}} checked="checked" {{/if}} />
                </div>
                
            </div>
            <div class="row form-group thumbSlidesAutoOnly">
                <div class="col-sm-12">
                    <div class="row form-group ">
                        <div class="col-xs-6">
                            <label>Thumb Height</label>
                            <input type="number" class="form-control thumb-height" placeholder="150" value="{{props.SectionOpts.thumbs.height}}" />
                        </div>
                        <div class="col-xs-6">
                            <label>Thumbs Width</label>
                            <input type="number" class="form-control thumb-width" placeholder="200" value="{{props.SectionOpts.thumbs.width}}" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="row form-group updateSection">
                <div class="col-sm-12">
                    <label><input type="checkbox" class="carousel-preview" {{#if props.SectionOpts.preview}} checked="checked" {{/if}} /> Show Preview</label>


                    <button class="btn btn-default updateThumbCarousel pull-right"><i class="fa fa-refresh"></i> Update</button>
                </div>
            </div>

            
        </div>

        <div class="row form-group">
            <div class="col-sm-12">
                <label>Arrow Color</label>
                <input type="text" class="form-control swiper-arrow" value="{{props.SectionOpts.arrowColor}}" />


            </div>
        </div>

        



        <div class="row form-group">
            <div class="col-sm-12 multi">
                <label>Source</label><br />
                <a class="btn btn-default asset-picker-button image" data-vals="{{#each props.ImageList}}{{this}},{{/each}}" href="javascript:;">Show List <i class="fa fa-plus"></i></a>
                <br />
                <div class="selected-list" data-selector=".swiper-wrapper" data-ng-class="swiper-item" style="display: none;">
                    <ul>
                        <li>
                            <div class="input-group">
                                <span class="form-control">None</span>
                                <span class="input-group-addon">
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="asset-picker multi panel panel-default" id="">
                    <div class="panel-heading">Asset Picker</div>

                    <div class="asset-display panel-body" style="display: block!important">

                    </div>
                    <div class="asset-actions panel-footer text-right">

                        <a href="javascript:;" class="btn btn-default updateSelection"><i class="fa fa-check"></i> Save Selection</a>
                        <a href="javascript:;" class="btn btn-default closeWindow"><i class="fa fa-times"></i> Close</a>

                    </div>
                </div>

            </div>
        </div>



    </div>
</script>
<script id="tabs_options" type="text/x-handlebars-template">
    <div class="custom-options">
        <div class="row form-group">
            <div id="button-section">
                <div class="col-sm-12 tab-entry">
                    {{#each props.TabList}}
                        {{> tab_option_partial_template}}
                    {{/each}}
                </div>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-12">
            </div>
            <div class="col-sm-12">
                <a href="javascript:;" class="btn btn-default  add-tab">Add Tab <i class="fa fa-plus"></i></a>
            </div>
        </div>
    </div>
</script>
<script id="folder_options" type="text/x-handlebars-template">
    <div class="custom-options">
      

        <label>Folder Layout</label>
        <select class="form-control folder-layout">
            {{#select props.SectionOpts.type}}
                <option value="grid">Grid Layout</option>
                <option value="list">List Layout</option>
            {{/select}}
        </select>
        <div class="row form-group ">
            <div class="col-sm-12 multi">
                <label>Source</label><br />
                <a class="btn btn-default asset-picker-button folder" data-vals="{{props.SectionOpts.selected}}" href="javascript:void(0)">Show List <i class="fa fa-plus"></i></a>
                <br />
                <div class="selected-list">
                    <ul>
                        <li>
                            <div class="input-group">
                                <span class="form-control">None</span>
                                <span class="input-group-addon">
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="asset-picker multi panel panel-default" id="">
                    <div class="panel-heading">Asset Picker</div>

                    <div class="asset-display panel-body" style="display: block!important">

                    </div>
                    <div class="asset-actions panel-footer text-right">

                        <a href="#" class="btn btn-default updateSelection"><i class="fa fa-check"></i> Save Selection</a>
                        <a href="#" class="btn btn-default closeWindow"><i class="fa fa-times"></i> Close</a>

                    </div>
                </div>

            </div>
        </div>

    </div>

</script>
<script id="buttons_options" type="text/x-handlebars-template">
    <div class="custom-options">
        <div class="row form-group hidden">

                <label>Alignment</label>

                <div class="btn-group" rel="text-align">
                    <a href="#" data-val="left" class="btn btn-default">Left</a>
                    <a href="#" data-val="center" class="btn btn-default active">Center</a>
                    <a href="#" data-val="right" class="btn btn-default">Right</a>
                </div>

        </div>
       
        <div class="row form-group">
            <div id="button-section">
                <div class="col-sm-12 button-entry">
                    {{#each props.ButtonList}}
                    {{> button_option_partial_template}}
                    
                    {{/each}}
                </div>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-12">
            </div>
            <div class="col-sm-12">
                <a href="javascript:;" class="btn btn-default  add-button">Add Button <i class="fa fa-plus"></i></a>
            </div>
        </div>
    </div>
</script>
<script id="footer_options" type="text/x-handlebars-template">
    <div class="custom-options">
        <div class="row form-group hidden">
            <div class="col-sm-12">
                <label>Alignment</label>

                <div class="btn-group" rel="text-align">
                    <a href="#" data-val="left" class="btn btn-default">Left</a>
                    <a href="#" data-val="center" class="btn btn-default active">Center</a>
                    <a href="#" data-val="right" class="btn btn-default">Right</a>
                </div>

            </div>
        </div>
        <div class="row form-group">
            <div class="footer-section">
                <div class="col-sm-12 link-entry">
                    {{#each props.FooterLinksList}}
                        {{> footer_option_partial_template}}
                    {{/each}}
                </div>
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-12">
            </div>
            <div class="col-sm-12">
                <a href="javascript:;" class="btn btn-default add-link">Add Link<i class="fa fa-plus"></i></a>
            </div>
        </div>
    </div>
</script>
<script id="no_access_options" type="text/x-handlebars-template">
    <label>No Access HTML</label>
    <div class="htmlSection" data-id="no_access">
        <textarea class="form-control realTimeEditable section-customhtml funky" data-selector=".content" rows="5">{{props.CustomHtml}}</textarea>
    </div>
    <label>Hide Default Hero</label>
    <br />
    {{#if props.SectionOpts.hideHero}}
    <input type="checkbox" class="hide-hero" checked="checked" />
    {{else}}
    <input type="checkbox" class="hide-hero" />
    {{/if}}
</script>
<script id="assets_options" type="text/x-handlebars-template">
    <div class="custom-options">
        <h3>Asset Options</h3>

        <div class="row form-group">
            <div class="col-sm-12 multi">
                <label>Source</label><br />
                <a class="btn btn-default asset-picker-button image" data-vals="{{#each props.ImageList}}{{this}},{{/each}}" href="javascript:;">Show List <i class="fa fa-plus"></i></a>
                <br />
                <div class="selected-list" style="display: none;">
                    <ul>
                        <li>
                            <div class="input-group">
                                <span class="form-control">None</span>
                                <span class="input-group-addon">
                                    <a href="#"><i class="fa fa-times"></i></a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="asset-picker multi panel panel-default" id="">
                    <div class="panel-heading">Asset Picker</div>

                    <div class="asset-display panel-body" style="display: block!important">

                    </div>
                    <div class="asset-actions panel-footer text-right">

                        <a href="javascript:;" class="btn btn-default updateSelection"><i class="fa fa-check"></i> Save Selection</a>
                        <a href="javascript:;" class="btn btn-default closeWindow"><i class="fa fa-times"></i> Close</a>

                    </div>
                </div>

            </div>
        </div>

        <div class="row form-group">
            <div class="col-sm-12">
                <label><input type="checkbox" class="section-preventdl" {{#if props.SectionOpts.preventDownloads}}checked="checked"{{/if}} /> Prevent Save As...</label>
            </div>

        </div>

    </div>
    
</script>
<script id="social_options" type="text/x-handlebars-template">
    <div class="custom-options">
        <h3>Social Options</h3>
        <div class="row form-group">
            <div class="col-sm-12">
                <label>iframe src</label>
                <a href="javascript:;" class="helperIcon" 
                   data-placement="right" 
                   data-toggle="popover" 
                   data-trigger="hover" 
                   data-original-title="" title="" 
                   data-content="Embed just the source of an iframe, or full iframe embed code"><i class=" fa fa-question-circle-o"></i>
                </a>
            </div>
            <div class="col-sm-12">
                <input type="text" name="social-src" data-selector=".content iframe" placeholder="https://walls.io/p63t5?nobackground=1&hide_header=1" class="form-control realTimeEditable section-iframesrc" value="{{props.SectionOpts.IframeSrc}}" />
            </div>
        </div>
        <div class="row form-group">
            <div class="col-sm-12">
                <label>Height</label>
                <input type="number" class="form-control realTimeEditable section-iframeheight" data-selector=".content iframe" value="{{props.SectionOpts.IframeHeight}}" />
            </div>
        </div>

    </div>
   
</script>
<script id="global_options" type="text/x-handlebars-template">
    <aside rel="{{id}}" class="theme-options">
        <div class="panel panel-default">
            <div class="panel-heading">
                <span>
                    {{id}} Options
                </span>
               
                <button class="btn btn-default visibilityToggle" style="visibility: hidden;"><i class="fa fa-eye-slash"></i></button>
               
                <button class="btn btn-default toggler"><i class="fa fa-chevron-down"></i></button>
            </div>
            <div class="panel-body" style="display: none; padding: 15px;">
                <div class="form-group">
                    <label>Company Name</label>
                    <a href="javascript:;" class="helperIcon" data-placement="right"
                       data-toggle="popover"
                       data-trigger="hover"
                       data-original-title=""
                       title=""
                       data-content="This will appear in the browser tab title, and in the automatically generated footer for this page"><i class=" fa fa-question-circle-o"></i></a>

                    <input type="text" class="form-control company-name realTimeEditable external" data-selector="#footerCompanyName" value="{{companyName}}" />
                </div>

                <div class="form-group">
                <label>Show Breadcrumbs</label>
                    <a href="javascript:;" class="helperIcon"
                       data-placement="right"
                       data-toggle="popover"
                       data-trigger="hover"
                       data-original-title=""
                       title=""
                       data-content="This will toggle the section navigation for the marketing view"><i class=" fa fa-question-circle-o"></i></a>
                    <br />
                {{#if breadcrumbs}}
                <input type="checkbox" class="show-breadcrumbs" checked="checked" />
                {{else}}
                <input type="checkbox" class="show-breadcrumbs"  />
                {{/if}}
                </div>
                <div class="globalOpts">
                    <div class="form-group">
                        <label>Custom Font URL</label>
                        <a href="javascript:;" class="helperIcon"
                           data-placement="right"
                           data-toggle="popover"
                           data-trigger="hover"
                           data-original-title=""
                           title=""
                           data-content="This font wil be used in the headings and body copy for this page"><i class=" fa fa-question-circle-o"></i></a><br />
                        <small>Can be the URL or the whole <code>&lt;link href="" ...</code> statement</small>
                        <div class="input-group">
                            <input type="text" class="form-control custom-font" value="{{customfont}}" />
                            <span class="input-group-addon"><i class="fa fa-check"></i></span>
                        </div>
                    </div>
                    <label>Custom Font Name</label>
                    <a href="javascript:;" class="helperIcon"
                       data-placement="right"
                       data-toggle="popover"
                       data-trigger="hover"
                       data-original-title=""
                       title=""
                       data-content="Copy and paste font name and style from google font or custom font definition"><i class=" fa fa-question-circle-o"></i></a>
                    <br />
                    <small>font-family: FontName, fontstyle; or just FontName, fontstyle;</small>
                    <div class="input-group">


                        <input type="text" class="form-control custom-font-name" value="{{customfontname}}" />
                        <span class="input-group-addon"><i class="fa fa-check"></i></span>

                    </div>
                </div>
        </div>
    </aside>
</script>
<script id="options_custom" type="text/x-handlebars-template">
    
  
    {{#if assets}}
    {{> assets_options}} {{/if}}
    {{#if custom_html}}
       {{> custom_html_options}}{{/if}}
    {{#if buttons}}
        {{> buttons_options}} {{/if}}
    {{#if social}}
    {{> social_options}} {{/if}}
    {{#if tabs}}
        {{> tabs_options}} {{/if}}
    {{#if carousel}}
        {{> carousel_options}} {{/if}}
    {{#if footer}}
        {{> footer_options}} {{/if}}
    {{#if folders}}
    {{> folder_options}} {{/if}}
    {{#if custom_hero}} 
        {{> custom_hero_options}} {{/if}}
    {{#if no_access}}
        {{> no_access_options}} {{/if}}
    
    
</script>
<script id="options-template" type="text/x-handlebars-template">
    <aside rel="{{id}}" class="theme-options">
       <div class="panel panel-default">
           <div class="panel-heading">
               <span>
                   {{id}} Options 
               </span>
               <a href="javascript:;" class="helperIcon"
                  data-id="{{id}}"
                  data-placement="right"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-original-title="" title=""
                  data-content="loading">
                   <i class=" fa fa-question-circle-o"></i>
               </a>
               {{#if props.Show}}
                <button class="btn btn-default active visibilityToggle"><i class="fa fa-eye"></i></button>
               {{else}}
                <button class="btn btn-default visibilityToggle"><i class="fa fa-eye-slash"></i></button>
               {{/if}}
               <button class="btn btn-default toggler"><i class="fa fa-chevron-down"></i></button>
           </div>
           <div class="panel-body" style="display: none;">
               <div class="tab-container">
                   <ul class="nav nav-tabs">
                       <li class="active"><a href="#{{id}}_general">General</a></li>
                       <li class=""><a href="#{{id}}_color">Colors</a></li>
                       <li class=""><a href="#{{id}}_advanced">Options</a></li>
                   </ul>
                   <div class="tab-content">
                       <div class="tab-pane active" id="{{id}}_general">
                           
                               <div class="row form-group ">

                                   <div class="col-sm-12">
                                       <h4>General</h4>
                                   </div>
                                   <div class="col-sm-12">
                                       <div class="input-group">
                                           <input type="text" class="form-control section-title realTimeEditable" data-selector=".title h2" placeholder="title" name="title" value="{{props.LayoutTitle}}" />
                                           <span class="input-group-addon">
                                               <input type="checkbox" {{#if props.HasHeading }} checked="checked" {{/if}} class="section-showtitle" />
                                           </span>
                                       </div>
                                   </div>
                               </div>
                              
                               <div class="row form-group">
                                   <div class="col-sm-12 hidden">
                                       <label>Description</label>
                                   </div>
                                   <div class="col-sm-12">
                                       <textarea class="form-control section-description realTimeEditable" name="section-description" data-selector=".description" placeholder="description">{{props.LayoutDescription}}</textarea>
                                   </div>
                               </div>

                           <div class="row form-group">
                               <div class="col-sm-12 hidden">
                                   <label>Alignment</label>
                               </div>
                               <div class="col-sm-12">
                                    <select class="form-control section-alignment">
                                        {{#select props.Align}}
                                        <option value="left">Align Left</option>
                                        <option value="center">Align Center</option>
                                        <option value="right">Align Right</option>
                                        {{/select}}
                                    </select>    
                               </div>
                           </div>
                               <div class="row form-group customCSSSection">
                                   <div class="col-sm-12">
                                      
                                           <label>Custom CSS</label> 
                                           <a href="javascript:;" class="helperIcon" data-placement="right"
                                               data-toggle="popover"
                                               data-trigger="hover"
                                               data-original-title=""
                                               title=""
                                               data-content="Custom styles that can apply to only this  #{{id}} section"><i class=" fa fa-question-circle-o"></i></a>
                                           <div class="pull-right">
                                               <code class="codeforid">#{{id}}</code>
                                               <a class="toggleCssHelper" href="javascript:;"><i class="fa fa-info-circle"></i></a>
                                            </div>
                                       </div>
                                       
                                  
                                   <div class="col-sm-12">
                                       <div class="helper cssStructure" data-id="{{id}}" style="display: none"></div>
                                       <textarea class="form-control section-customcss" rows="5" name="section-customcss" placeholder=".container { padding: 3em;} /*get each element in area and make a selector for each */">{{props.CustomCSS}}</textarea>

                                       <div class="text-right">
                                           <div class="btn-group">
                                               <a href="javascript:;" class="btn btn-default update"><i class="fa fa-check"></i></a>
                                               <a href="javascript:;" class="btn btn-default clearCSS"><i class="fa fa-times"></i></a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                         
                       </div>
                       <div class="tab-pane" id="{{id}}_color">
                           <div class="">
                               <div class="row form-group">
                                   <div class="col-sm-12">
                                       <h4>Colors</h4>
                                   </div>
                                   <div class="col-xs-6">
                                       <label>Text Color</label>

                                       <div id="" class="input-group colorpicker-component colorpicker-element textColor" title="Using input value">
                                           <input type="text" class="form-control" value="{{props.Background.text}}">
                                           <span class="input-group-addon"><i style="background-color: {{props.Background.text}};"></i></span>
                                       </div>
                                   </div>
                                   <div class="col-xs-6">
                                       <label>Background Color</label>
                                       <div id="" class="input-group colorpicker-component colorpicker-element bgColor" title="Using input value">
                                           <input type="text" class="form-control" value="{{props.Background.color}}">
                                           <span class="input-group-addon"><i style="background-color: {{props.Background.color}};"></i></span>
                                       </div>
                                   </div>
                               </div>
                               <hr />
                               <div class="row form-group">
                                   <div class="col-xs-12">
                                       <label>Background Image</label>
                                   </div>
                                   <div class="col-xs-12">
                                       <a class="btn btn-default asset-picker-button hidden" data-vals=""  href="#">Show List <i class="fa fa-plus"></i></a>
                                       <a class="btn btn-default btnUpload" href="javascript:;"><i class="fa fa-upload"></i></a>
                                       <input type="text" class="backgroundSource form-control hidden" value="{{props.Background.source}}" />
                                       <div class="uploadForm">
                                           <div class="selected-list background-selector" >
                                               <ul>
                                                   <li>
                                                       <div class="input-group">
                                                           <span class="form-control background-input" data-src="{{props.Background.source}}">{{props.Background.source}}</span>
                                                           <span class="input-group-addon">
                                                               <a href="javascript:;"><i class="fa fa-times"></i></a>
                                                           </span>
                                                       </div>
                                                   </li>
                                               </ul>
                                           </div>
                                       </div>
                                       <div class="asset-picker single panel panel-default" id="">
                                           <div class="panel-heading">Asset Picker</div>
                                           <div class="asset-display panel-body" style="display: block!important">
                                           </div>
                                           <div class="asset-actions panel-footer text-right">
                                               <a href="javascript:;" class="btn btn-default updateSelection"><i class="fa fa-check"></i> Save Selection</a>
                                               <a href="javascript:;" class="btn btn-default closeWindow"><i class="fa fa-times"></i> Close</a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div class="row form-group">
                                   <div class="col-xs-6">
                                       <label class=""> Size</label><br />
                                       
                                       <select class="form-control cssDropdown section-size" rel="background-size">
                                          
                                           
                                          {{#select props.Background.size}}
                                           <option value="contain">Stretch to Fit</option>
                                           <option value="cover">Stretch to Fill</option>
                                           <option value="inherit">Actual Size</option>
                                           {{/select}}

                                       </select>
                                   </div>
                                   <div class="col-xs-6">
                                       <label class=""> Attach</label><br />
                                       <select class="form-control cssDropdown section-attach" rel="background-attachment" >
                                           {{#select props.Background.attachment}}
                                           <option value="fixed">Fixed</option>
                                           <option value="scroll">Scroll</option>
                                           <option value="inherit">Default</option>
                                           {{/select}}

                                       </select>
                                   </div>
                               </div>
                               <div class="row form-group">
                                   <div class="col-xs-6">
                                       <label class=""> Repeat</label><br />
                                       <select class="form-control cssDropdown section-repeat" rel="background-repeat">
                                           {{#select props.Background.repeat}}
                                           <option value="repeat">All</option>
                                           <option value="no-repeat">None</option>
                                           <option value="repeat-x">Horizontal</option>
                                           <option value="repeat-y">Vertical</option>
                                           {{/select}}
                                       </select>
                                   </div>
                                   <div class="col-xs-6">
                                       <label class=""> Position</label><br />
                                       <select class="form-control cssDropdown section-position" rel="background-position">
                                           {{#select props.Background.position}}
                                           <option value="top left">Top Left</option>
                                           <option value="top center">Top Center</option>
                                           <option value="top right">Top Right</option>
                                           <option value="center left">Center Left</option>
                                           <option value="center center">Center Center</option>
                                           <option value="center right">Center Right</option>
                                           <option value="bottom left">Bottom Left</option>
                                           <option value="bottom center">Bottom Center</option>
                                           <option value="bottom right">Bottom Right</option>
                                           {{/select}}
                                       </select>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="tab-pane" id="{{id}}_advanced">
                           <div class="row">


                               <div class="col-sm-12">
                                   <h4 class="hidden">{{id}} Options</h4>
                                   {{> options_custom}}
                               </div>
                           </div>
                       </div>
                   </div>
               </div>


           </div>
            <div class="panel-footer text-right hidden">
                <a href="javascript:;" class="btn btn-success"><i class="fa fa-check"></i></a>
            </div>
       </div>
    </aside>
</script>

<!-- general templates -->
<script id="default-template" type="text/x-handlebars-template">
    <section id="hero" class="default {{ViewID}}" style="{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; color: {{Background.text}} ; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}; background-position: {{Background.position}}">
        <div class="container">
            <img src="{{FolderImage}}" align="left" />
            <h1 style="color: {{Background.text}}">{{LayoutTitle}}</h1>
        </div>
    </section>
</script>
<script id="no_access_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; color: {{Background.text}} ; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}">
        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    {{{CustomHtml}}}
                </div>
            </div>
        </div>
    </section>
</script>
<script id="blank-template" type="text/x-handlebars-template">
    <section style='background-color:{{Background.color}}; color: {{Background.text}} ; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}">
        <div class="container">
            <div class="content-wrapper">
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    <p>
                        {{> defaultComingSoon}}
                    </p>
                </div>
            </div>
        </div>
    </section>
</script>
<script id="realFooter_template" type="text/x-handlebars-template">
    <section id="realFooter">
        <div class="container">
            <div class="content">

                <div class="row">
                    <div class="col-sm-6">
                        <div class="link-wrapper">
                            <h3 id="footerCompanyName">{{name}}</h3>
                        </div>
                    </div>
                    <div class="col-sm-6 text-right">

                        &copy; {{year}}
                        <a href="http://mymediabox.com/" target="_blank">
                            MediaBox
                        </a>. A division of Jonas Software

                    </div>
                </div>
            </div>
        </div>
    </section>
</script>
<script id="header-template" type="text/x-handlebars-template">

    <nav class="navbar main-navbar navbar-default" id="admin-navbar">

        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/app/dam/" id="logo">

                <img src="{{logo}}" alt="logo">

            </a>

        </div>
        <div id="navbar" class="navbar-collapse collapse" aria-expanded="true" style="">


            <ul class="navbar-nav nav" id="admin-nav">


                <li>
                    <a href="javascript:;" class="toggleProps">
                        <i class="fa fa-building"></i>
                        <span class="short-text">
                            Properties
                        </span>
                    </a>
                </li>
                <li class="" data-placement="bottom" data-toggle="popover" data-trigger="hover" data-content="Profile" data-original-title="" title="">
                    <a href="javascript:;" id="account-link" class="account">

                        <i class="fa fa-user"></i>

                        {{name}}
                    </a>
                </li>


                <li class="" data-placement="bottom" data-toggle="popover" data-trigger="hover" data-content="Announcements" data-original-title="" title="">
                    <a href="javascript:;" id="announcements-link" class="" data-toggle="dropdown">

                        <i class="fa fa-bullhorn"></i>
                        <span id="InitAnnouncementCnt" class="count">{{notifications}}</span>
                        <span class="short-text ">
                            Announcements
                        </span>
                    </a>
                </li>

                <li class="" data-placement="bottom" data-toggle="popover" data-trigger="hover" data-content="Support" data-original-title="" title="" style="display:none">
                    <a href="javascript:;" id="support-link" title="View Help" class="btn btn-warning" style="display: block;">
                        <i class="fa fa-life-ring"></i>
                        <span class="short-text">
                            Support
                        </span>
                    </a>
                </li>

                <li class="dropdown " data-placement="bottom" data-toggle="popover" data-trigger="hover" data-content="Information" data-original-title="" title="">
                    <a href="javascript:;" class="btn dropdown-toggle text-left" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-info-circle"></i>

                        <span class="short-text ">

                            Information
                            <span class="caret"></span>
                        </span>
                    </a>
                    <ul class="dropdown-menu leftMenu" aria-labelledby="dropdownMenu2">
                        <li><a href="/help/index.html" target="_oldpages"><i class="fa fa-graduation-cap"></i><div class="btn_sel_text">Tutorials</div></a></li>
                        <li><a href="/about/index.html" target="_oldpages"><i class="fa fa-question-circle"></i> <div class="btn_sel_text">About</div></a></li>
                        <li><a href="/contact-us/index.html" target="_oldpages"><i class="fa fa-phone"></i><div class="btn_sel_text">Contact Us</div></a></li>

                    </ul>
                </li>



                <li class="" data-placement="bottom" data-toggle="popover" data-trigger="hover" data-content="Logout" data-original-title="" title="">
                    <a href="javascript:;" id="logout-link" class="logout">
                        <i class="fa fa-sign-out"></i>
                        <span class="short-text ">
                            Log Out
                        </span>
                    </a>
                </li>

                <li class="end hidden" id="mobileAdminToggle">
                    <a href="javascript:;">
                        <i class="fa fa-ellipsis-v "></i>
                    </a>
                </li>


            </ul>
        </div><!--/.nav-collapse -->

    </nav>
</script>

<!-- partial templates -->
<script id="assets_all_grid_partial_template" type="text/x-handlebars-template">

    <div class="col-sm-4 col-md-3">
        <a class="openupdetails" href="{{detailsrc}}"
           data-mediaid="{{mediaid}}"
           style="background-image: url({{previewsrc}})"
           data-content="{{content}}"
           data-protect="true"
           data-fancybox="group"
           data-caption="Caption">
            <span class="fa fa-search"></span>
        </a>
    </div>
</script>
<script id="swiper_slide_partial" type="text/x-handlebars-template">

    <div class="swiper-slide" data-mediaid="{{this}}" data-content="" data-preview="">
        <i class="fa fa-spinner fa-spin"></i>
    </div>
</script>
<script id="tab_option_partial_template" type="text/x-handlebars-template">
    <div class="panel panel-default" data-selector="{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}">
        <div class="panel-heading editableTitle">
            <span>{{{title}}}</span>

            <button class="btn btn-default toggler"><i class="fa fa-chevron-down"></i></button>
        </div>
        <div class="panel-body">
            <label>Tab Text</label>
            <input type="text"
                   class="form-control realTimeEditable titleContent section-tab-tabtext"
                   value="{{title}}"
                   data-selector=".nav-tabs li:nth-child({{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}) a"
                   name="tabText[{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}]" />

            <label>Content</label>
            <div class="htmlSection" data-id="tabs_{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}">
                <textarea type="text"
                          class="form-control realTimeEditable section-tab-tabcontent"
                          name="tabContent[{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}]">
                    {{content}}
                </textarea>
            </div>

           
            <br />
            <a href="javascript:;" class="removeBtn btn btn-sm btn-danger"><i class="fa fa-times"></i> Remove</a>
        </div>
    </div>

</script>
<script id="button_option_partial_template" type="text/x-handlebars-template">
    <div class="panel panel-default" data-selector="{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}">
        <div class="panel-heading editableTitle">
            <span>{{title}}</span>

            <button class="btn btn-default toggler"><i class="fa fa-chevron-down"></i></button>
        </div>
        <div class="panel-body">
            <label>Text</label>
            <input type="text" class="form-control realTimeEditable titleContent section-button-text"
                   value="{{title}}"
                   data-selector=".button-wrapper .btn:nth-child({{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}})"
                   name="buttonText[{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}]" />

            <label>Link</label>
            <input type="text" class="form-control section-button-link" 
                   name="buttonLink[{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}]" 
                   value="{{link}}" />

            <label>Target</label>
            <select class="form-control section-button-target">
                {{#select target}}
                <option value="_self">Normal (same page)</option>
                <option value="_blank">Open New Tab/Window</option>
                {{/select}}
            </select>

            <br />
            <a href="javascript:;" class="removeBtn btn btn-sm btn-danger"><i class="fa fa-times"></i> Remove</a>
        </div>
    </div>
    
</script>
<script id="footer_option_partial_template" type="text/x-handlebars-template">

    <div class="panel panel-default" data-selector="{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}">
        <div class="panel-heading editableTitle">
            <span>{{{title}}}</span>

            <button class="btn btn-default toggler"><i class="fa fa-chevron-down"></i></button>
        </div>
        <div class="panel-body">
            <label>Text</label>
            <input type="text" class="form-control realTimeEditable titleContent section-link-text"
                   value="{{title}}"
                   data-selector=".footer-link:nth-child({{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}})"
                   name="buttonText[{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}]" />

            <label>Link</label>
            <input type="text" class="form-control section-footer-link"
                   name="footerLink[{{#if index}}{{index}}{{else}}{{inc @@index}}{{/if}}]"
                   value="{{link}}" />

            <label>Target</label>
            <select class="form-control section-link-target">
                {{#select target}}
                <option value="_self">Normal (same page)</option>
                <option value="_blank">Open New Tab/Window</option>
                {{/select}}
            </select>

            <br />
            <a href="javascript:;" class="removeBtn btn btn-sm btn-danger"><i class="fa fa-times"></i> Remove</a>
        </div>
    </div>

</script>

<!-- render templates -->
<script id="custom_hero_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}" class="{{SectionOpts.type}}">
        {{#if SectionOpts.imageOnly}}
            
            <img src="{{Background.source}}" class="heroImage" />
        {{else}}
        <div class="container">
        <div class="content-wrapper text-{{Align}}">
            {{#if HasHeading}}
            <div class="title"><h2>{{LayoutTitle}}</h2></div>
            {{/if}}
            <div class="description">{{LayoutDescription}}</div>
            <div class="content">
                {{> custom_hero }}
            </div>
        </div>
        </div>
        {{/if}}
    </section>
</script>
<script id="assets_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}">
        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    <div class="grid">
                        <div class="row">
                            {{#each ImageList}}
                            {{> asset_grid}}
                            {{/each}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</script>
<script id="assets_all_template" type="text/x-handlebars-template">
    <div class="row">
        {{#each ImageList}}
        {{> asset_grid_all}}
        {{/each}}
    </div>
</script>
<script id="folder_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}" class="folder-{{SectionOpts.type}}">
    
        {{#if SectionOpts.full}}
        <div class="folder_hero_wrapper">
            {{#if FolderList}}
            {{#each FolderList}}
            {{#if title}}
            <div class="folder_hero row_{{@@index}}">
                <div class="container">
                    <a href="/app/dam/Marketing/Site/Index/{{id}}" style="color:{{../../Background.text}}">
                        {{#if title}}
                        <span class="image">
                            <img src="/{{FolderImage}}" height="150" />
                        </span>
                        <span class="text">
                            <em class="title">{{title}}</em>
                            <strong class="descrip">{{description}}</strong>
                        </span>
                        {{else}}
                        {{this}}
                        {{/if}}

                    </a>
                </div>
            </div>
            {{else}}
            <div class="container" style="padding: 3em">
                <i class="fa fa-spinner fa-spin"></i>
            </div>
            {{/if}}


            {{/each}}
            {{else}}
            <div class="container" style="padding: 3em">
                <i class="fa fa-spinner fa-spin"></i>
            </div>
            {{/if}}

        </div>
        {{else}}    
            <div class="container">
                <div class="content-wrapper text-{{Align}}">
                    {{#if HasHeading}}
                    <div class="title"><h2>{{LayoutTitle}}</h2></div>
                    {{/if}}
                    <div class="description">{{LayoutDescription}}</div>
                    <div class="content">

                        <div class="sub-shortcut-list-marketing">
                            <div class="row">
                                {{#if FolderList}}
                                {{#each FolderList}}
                                {{#if title}}
                                    {{#if status}}
                                    <div class="col-sm-12 col-md-6 col-lg-4 sub-shortcut-element-marketing">

                                        <div class="panel-default panel">
                                            <div class="panel-heading">
                                                {{#if title}}
                                                <span>{{title}}</span>
                                                {{else}}
                                                {{this}}
                                                {{/if}}
                                            </div>
                                            <div class="panel-body" style="background-image:url(/{{FolderImage}})">
                                                {{#if title}}
                                                <a href="/app/dam/Marketing/Site/Index/{{id}}" style="color:{{../../Background.text}}">
                                                    <span class="image-wrap">
                                                        <img src="/{{FolderImage}}" height="150" />
                                                    </span>

                                                </a>
                                                <p class="descrip">{{description}}</p>
                                                {{else}}
                                                <i class="fa fa-spinner fa-spin"></i>
                                                {{/if}}
                                            </div>

                                        </div>

                                    </div>
                                    {{/if}}
                                {{else}}
                                <div class="col-sm-12 col-md-6 col-lg-4 sub-shortcut-element">
                                    <i class="fa fa-spinner fa-spin"></i>
                                </div>
                                {{/if}}


                                {{/each}}
                                {{else}}
                                <i class="fa fa-spinner fa-spin"></i>
                                {{/if}}
                            </div>
                        </div>

                    </div>
                </div>
        </div>
        {{/if}}
    </section>
</script>
<script id="carousel_full_template" type="text/x-handlebars-template">
    <style>
        .swiper-pagination-bullet-active {
            background:{{SectionOpts.arrowColor}}
        }
    </style>
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}} ; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}" class="carousel-full">
        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            {{#each ImageList}}
                            {{> swiperslide}}
                            {{/each}}
                        </div>
                        <div class="swiper-button-next swiper-button-carousel-next swiper-carousel-next" style="color:{{SectionOpts.arrowColor}}"></div>
                        <div class="swiper-button-prev swiper-button-carousel-prev swiper-carousel-prev" style="color:{{SectionOpts.arrowColor}}"></div>
                        <div class="swiper-pagination-carousel swiper-pagination swiper-pagination-container swiper-pagination-clickable swiper-pagination-bullets"></div>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </section>
    
</script>
<script id="carousel_thumb_template" type="text/x-handlebars-template">
     
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' 
             id="{{ViewID}}" 
             class="carousel-thumb">
        <style>
        .swiper-pagination-bullet-active {
            background:{{SectionOpts.arrowColor}}
        }
        body section.carousel-thumb .swiper-slide {
             width: {{SectionOpts.thumbs.width}}px;
             height:{{SectionOpts.thumbs.height}}px;
         }
    </style>
        <input type="hidden" id="carousel_slidesperview" value="{{SectionOpts.thumbs.slidesPerView}}" />
        <input type="hidden" id="carousel_thumbsnum" value="{{SectionOpts.thumbs.thumbsnum}}" />
        <input type="hidden" id="carousel_responsive" value="{{SectionOpts.thumbs.responsive}}" />

        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    <div class="swiper-container-wrapper">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                {{#each ImageList}}
                                {{> swiperslide}}
                                {{/each}}
                            </div>
                            <div class="swiper-button-next swiper-button-carousel-next swiper-carousel-next" style="color:{{SectionOpts.arrowColor}}"></div>
                            <div class="swiper-button-prev swiper-button-carousel-prev swiper-carousel-prev" style="color:{{SectionOpts.arrowColor}}"></div>
                            <div class="swiper-pagination-carousel swiper-pagination swiper-pagination-container swiper-pagination-clickable swiper-pagination-bullets"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
   
</script>
<script id="carousel_thumb_widget_preview" type="text/x-handlebars-template">
    <div class="carousel-with-preview-wrapper" id="{{ViewID}}_increment">
        <style>
            body #{{ViewID}} section.carousel-thumb .swiper-slide {
             width: {{SectionOpts.thumbs.width}}px;
             height:{{SectionOpts.thumbs.height}}px;
         }

            .widget .swiper-slide {
                height: 150px;
                width: 200px;
                margin-right: 10px!important;
            }
        </style>

        <input type="hidden" class="carousel_slidesperview" value="{{SectionOpts.thumbs.slidesPerView}}" />
        <input type="hidden" class="carousel_thumbsnum" value="{{SectionOpts.thumbs.thumbsnum}}" />
        <input type="hidden" class="carousel_responsive" value="{{SectionOpts.thumbs.responsive}}" />

        <div class="preview-wrapper">
            <div class="preview-media-wrapper">
                <figure><i class="fa fa-spinner fa-spin"></i></figure>
            </div>
        </div>
        <div class="swiper-container-wrapper">
           
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    {{#each ImageList}}
                    {{> swiperslide}}
                    {{/each}}
                </div>
                <div class="swiper-button-next swiper-button-carousel-next swiper-carousel-next" style="color:{{SectionOpts.arrowColor}}"></div>
                <div class="swiper-button-prev swiper-button-carousel-prev swiper-carousel-prev" style="color:{{SectionOpts.arrowColor}}"></div>
                <div class="swiper-pagination-carousel swiper-pagination swiper-pagination-container swiper-pagination-clickable swiper-pagination-bullets"></div>
            </div>
        </div>
    </div>

</script>
<script id="carousel_thumb_template_preview" type="text/x-handlebars-template">
    
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' 
             id="{{ViewID}}" 
             class="carousel-thumb">
         <style>
        .swiper-pagination-bullet-active {
            background:{{SectionOpts.arrowColor}}
        }
        body section.carousel-thumb .swiper-slide {
             width: {{SectionOpts.thumbs.width}}px;
             height:{{SectionOpts.thumbs.height}}px;
         }
    </style>
        <input type="hidden" id="carousel_slidesperview" value="{{SectionOpts.thumbs.slidesPerView}}" />
        <input type="hidden" id="carousel_thumbsnum" value="{{SectionOpts.thumbs.thumbsnum}}" />
        <input type="hidden" id="carousel_responsive" value="{{SectionOpts.thumbs.responsive}}" />
        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
      
                    <div class="carousel-with-preview-wrapper" id="{{ViewID}}_increment">
                        <div class="preview-wrapper">
                            <div class="preview-media-wrapper">
                                <figure><i class="fa fa-spinner fa-spin"></i></figure>
                            </div>
                        </div>
                        <div class="swiper-container-wrapper">
                            {{SetionOpts.thumbs.thumbsnum}}
                            <div class="swiper-container">
                                <div class="swiper-wrapper">
                                    {{#each ImageList}}
                                    {{> swiperslide}}
                                    {{/each}}
                                </div>
                                <div class="swiper-button-next swiper-button-carousel-next swiper-carousel-next" style="color:{{SectionOpts.arrowColor}}"></div>
                                <div class="swiper-button-prev swiper-button-carousel-prev swiper-carousel-prev" style="color:{{SectionOpts.arrowColor}}"></div>
                                <div class="swiper-pagination-carousel swiper-pagination swiper-pagination-container swiper-pagination-clickable swiper-pagination-bullets"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>

</script>
<script id="custom_html_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}">
        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    {{> custom_html }}
                </div>
            </div>
        </div>
    </section>
</script>
<script id="social_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}">
        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    {{> social }}
                </div>
            </div>
        </div>
    </section>
</script>
<script id="footer_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}">
        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    <div class="link-wrapper">
                        {{# each FooterLinksList}}
                        {{> footer_links}}
                        {{/each}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</script>
<script id="buttons_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}} background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}">
        <div class="container">
            <div class="content-wrapper text-{{Align}}">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    <div class="button-wrapper">
                        {{# each ButtonList}}
                        {{> button_list}}
                        {{/each}}
                    </div>
                </div>
            </div>
        </div>
    </section>
</script>
<script id="tabs_template" type="text/x-handlebars-template">
    <section style='{{#if Show}}display: block;{{else}}display: none;{{/if}}  background-color:{{Background.color}}; background-position:{{Background.position}}; color: {{Background.text}}; background-image:url({{Background.source}}); background-size: {{Background.size}}; background-repeat: {{Background.repeat}}; background-attachment: {{Background.attachment}}' id="{{ViewID}}">
        <div class="container">
            <div class="content-wrapper">
                {{#if HasHeading}}
                <div class="title"><h2>{{LayoutTitle}}</h2></div>
                {{/if}}
                <div class="description">{{LayoutDescription}}</div>
                <div class="content">
                    <div class="tabs-wrapper text-{{Align}}">
                        <div class="tab-container">
                            <ul class="nav nav-tabs">
                                {{# each TabList}}
                                {{> tab_list_tabs}}
                                {{/each}}
                            </ul>
                            <div class="tab-content">
                                {{# each TabList}}
                                {{> tab_list_content}}
                                {{/each}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</script>

